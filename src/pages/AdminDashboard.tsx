import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, FileText, Mail, Tags, UploadCloud, User } from 'lucide-react';
import { db, storage } from '../lib/firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorImage?: string;
  category: string;
  image: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  createdAt: any; // Firestore timestamp
  status: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'blogs' | 'categories' | 'contacts'>('blogs');

  // Blog State
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '', excerpt: '', content: '', author: '', authorImage: '', category: '', image: ''
  });

  // Contacts State
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  // Categories & Upload State
  const [categories, setCategories] = useState<{id: string, name: string}[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Authentication & Data Fetching
  useEffect(() => {
    if (localStorage.getItem('adminAuth') !== 'true') {
      navigate('/admin/login');
      return;
    }

    // Subscribe to Blogs
    const qBlogs = query(collection(db, 'blogs'), orderBy('date', 'desc'));
    const unsubscribeBlogs = onSnapshot(qBlogs, (snapshot) => {
      const blogsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
      setPosts(blogsData);
    });

    // Subscribe to Contacts
    const qContacts = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    const unsubscribeContacts = onSnapshot(qContacts, (snapshot) => {
      const contactsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage));
      setMessages(contactsData);
    });

    // Subscribe to Categories
    const qCats = query(collection(db, 'blogCategories'), orderBy('name', 'asc'));
    const unsubscribeCats = onSnapshot(qCats, (snapshot) => {
      setCategories(snapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name })));
    });

    return () => {
      unsubscribeBlogs();
      unsubscribeContacts();
      unsubscribeCats();
    };
  }, [navigate]);


  // ─── Blog Handlers ────────────────────────────────────────────────────────
  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postData = {
        ...formData,
        date: editingPost ? editingPost.date : new Date().toISOString().split('T')[0],
      };

      if (editingPost) {
        await updateDoc(doc(db, 'blogs', editingPost.id), postData);
      } else {
        await addDoc(collection(db, 'blogs'), postData);
      }

      setShowForm(false);
      setEditingPost(null);
      setFormData({ title: '', excerpt: '', content: '', author: '', authorImage: '', category: '', image: '' });
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog. Ensure Firestore rules are open.");
    }
  };

  const handleEditBlog = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title, excerpt: post.excerpt, content: post.content,
      author: post.author, authorImage: post.authorImage || '', category: post.category, image: post.image
    });
    setShowForm(true);
  };

  const handleDeleteBlog = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'blogs', id));
      } catch (error) {
        console.error("Error deleting blog", error);
      }
    }
  };

  const handleSeedBlogs = async () => {
    if (window.confirm('Load initial mock data into Firestore? This will add 3 dummy posts.')) {
      const dummyPosts = [
        {
          title: "The Future of AI in Enterprise Software",
          excerpt: "Discover how artificial intelligence is reshaping the landscape of enterprise software...",
          content: "Full content here",
          date: "2024-03-15",
          author: "Sarah Johnson",
          category: "AI & Machine Learning",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
        },
        {
          title: "Securing Cloud Infrastructure in 2024",
          excerpt: "Essential security measures every organization needs to implement for their cloud infrastructure.",
          content: "Full content here",
          date: "2024-03-10",
          author: "Michael Chen",
          category: "Cybersecurity",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
        }
      ];
      for (const p of dummyPosts) await addDoc(collection(db, 'blogs'), p);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'image' | 'authorImage') => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const storageRef = ref(storage, `blog_images/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFormData(prev => ({ ...prev, [fieldName]: url }));
    } catch (error) {
      console.error("Upload error", error);
      alert("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.trim()) return;
    try {
      await addDoc(collection(db, 'blogCategories'), { name: newCategory.trim() });
      setNewCategory('');
    } catch (err) { alert('Error adding category'); }
  };

  const handleDeleteCategory = async (id: string) => {
    if (window.confirm("Delete this category?")) {
      await deleteDoc(doc(db, 'blogCategories', id));
    }
  };

  // ─── Contact Handlers ─────────────────────────────────────────────────────
  const markMessageRead = async (id: string) => {
    try {
      await updateDoc(doc(db, 'contacts', id), { status: 'read' });
    } catch (error) {
      console.error("Error marking read", error);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (window.confirm('Delete this message?')) {
      try {
        await deleteDoc(doc(db, 'contacts', id));
        if (selectedMessage?.id === id) setSelectedMessage(null);
      } catch (error) {
        console.error("Error deleting message", error);
      }
    }
  }


  return (
    <div className="min-h-screen bg-slate-50">


      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8 items-start">
        {/* ── Sidebar Navigation ── */}
        <aside className="w-64 flex-shrink-0 space-y-2">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'blogs' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <FileText className="h-5 w-5" /> Blog Management
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'categories' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Tags className="h-5 w-5" /> Categories
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'contacts' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" /> Inquiries
            </div>
            {messages.filter(m => m.status === 'new').length > 0 && (
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'contacts' ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'}`}>
                {messages.filter(m => m.status === 'new').length}
              </span>
            )}
          </button>
        </aside>

        {/* ── Main Content Area ── */}
        <main className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-[600px]">

          {/* TAB: BLOGS */}
          {activeTab === 'blogs' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Blog Posts</h2>
                  <p className="text-sm text-slate-500">Manage your website's news and articles.</p>
                </div>
                <div className="flex gap-3">
                  {posts.length === 0 && (
                    <button onClick={handleSeedBlogs} className="text-sm border border-slate-300 px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-50">
                      Load Demodata
                    </button>
                  )}
                  <button
                    onClick={() => { setShowForm(!showForm); setEditingPost(null); setFormData({ title: '', excerpt: '', content: '', author: '', authorImage: '', category: '', image: '' }); }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center transition-colors"
                  >
                    {showForm ? 'Cancel' : <><Plus className="h-4 w-4 mr-2" /> New Post</>}
                  </button>
                </div>
              </div>

              {showForm ? (
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-8">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">{editingPost ? 'Edit Post' : 'Create New Post'}</h3>
                  <form onSubmit={handleBlogSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="col-span-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
                      <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required>
                        <option value="" disabled>Select Category</option>
                        {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                      </select>
                      <input type="text" placeholder="Author Name" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
                      
                      {/* Author Image Upload */}
                      <div className="w-full flex items-center gap-2">
                        <label className={`flex-1 border-2 border-dashed ${isUploading ? 'border-blue-400 bg-blue-50' : 'border-slate-300 hover:bg-slate-50'} rounded-lg px-2 py-1 cursor-pointer transition-colors flex items-center justify-center gap-1 h-[42px]`}>
                           <UploadCloud className="h-4 w-4 text-slate-400" />
                           <span className="text-slate-600 font-medium text-xs">Author Photo</span>
                           <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'authorImage')} disabled={isUploading} />
                        </label>
                        {formData.authorImage ? <img src={formData.authorImage} alt="Preview" className="h-[38px] w-[38px] object-cover rounded-full shadow-sm border border-slate-200" /> : <div className="h-[38px] w-[38px] bg-slate-100 rounded-full flex items-center justify-center border border-slate-200"><User className="h-4 w-4 text-slate-400" /></div>}
                      </div>
                      
                      {/* Cover Image Upload (Spans full width) */}
                      <div className="col-span-2 w-full flex items-center gap-4">
                        <label className={`flex-1 border-2 border-dashed ${isUploading ? 'border-blue-400 bg-blue-50' : 'border-slate-300 hover:bg-slate-50'} rounded-lg p-2 cursor-pointer transition-colors flex items-center justify-center gap-2 h-[42px]`}>
                           {isUploading ? <span className="text-blue-600 text-sm animate-pulse">Uploading...</span> : <><UploadCloud className="h-4 w-4 text-slate-400" /><span className="text-slate-600 font-medium text-sm">Upload Local Cover Image</span></>}
                           <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} disabled={isUploading} />
                        </label>
                        {formData.image && <img src={formData.image} alt="Preview" className="h-[42px] w-20 object-cover rounded shadow-sm border border-slate-200" />}
                        <input type="url" placeholder="Or paste Cover Image URL" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-[42px] text-sm" required />
                      </div>

                      <textarea placeholder="Short Excerpt (shows on cards)" value={formData.excerpt} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} className="col-span-2 w-full px-4 py-2 border rounded-lg h-20 focus:ring-2 focus:ring-blue-500 outline-none" required />
                      <textarea placeholder="Full Content block" value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} className="col-span-2 w-full px-4 py-2 border rounded-lg h-40 focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 mt-4">
                      <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-200">Cancel</button>
                      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">{editingPost ? 'Save Changes' : 'Publish Post'}</button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="divide-y divide-slate-100 border border-slate-100 rounded-lg">
                  {posts.map(post => (
                    <div key={post.id} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                      <div className="flex gap-4 items-center">
                        <img src={post.image} alt="" className="w-16 h-12 object-cover rounded-md" />
                        <div>
                          <h3 className="font-semibold text-slate-800">{post.title}</h3>
                          <div className="flex gap-3 text-xs text-slate-500 mt-1">
                            <span className="bg-slate-100 px-2 rounded">{post.category}</span>
                            <span>{post.date}</span>
                            <span>By {post.author}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditBlog(post)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"><Edit className="h-4 w-4" /></button>
                        <button onClick={() => handleDeleteBlog(post.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  ))}
                  {posts.length === 0 && <div className="p-8 text-center text-slate-500">No blog posts found.</div>}
                </div>
              )}
            </div>
          )}

          {/* TAB: CATEGORIES */}
          {activeTab === 'categories' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-800">Blog Categories</h2>
                <p className="text-sm text-slate-500">Manage tags and categories used for your blog posts.</p>
              </div>

              <form onSubmit={handleAddCategory} className="flex gap-4 mb-8">
                <input type="text" placeholder="New Category Name (e.g. Serverless)" value={newCategory} onChange={e => setNewCategory(e.target.value)} className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none max-w-sm" required />
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 shadow-sm transition-colors">Add Category</button>
              </form>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map(cat => (
                  <div key={cat.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
                    <span className="font-medium text-slate-700">{cat.name}</span>
                    <button onClick={() => handleDeleteCategory(cat.id)} className="text-slate-400 hover:text-red-600 p-1 bg-white rounded shadow-sm border border-slate-200"><Trash2 className="h-4 w-4" /></button>
                  </div>
                ))}
                {categories.length === 0 && <p className="text-slate-500 text-sm col-span-2">No categories yet. Add one above.</p>}
              </div>
            </div>
          )}

          {/* TAB: CONTACTS */}
          {activeTab === 'contacts' && (
            <div className="flex h-full min-h-[600px]">
              {/* List */}
              <div className="w-1/3 border-r border-slate-200 flex flex-col">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                  <h2 className="font-bold text-slate-800">Inbox</h2>
                </div>
                <div className="overflow-y-auto flex-1 h-[550px]">
                  {messages.map(msg => (
                    <button
                      key={msg.id}
                      onClick={() => { setSelectedMessage(msg); if (msg.status === 'new') markMessageRead(msg.id); }}
                      className={`w-full text-left p-4 border-b border-slate-100 transition-colors ${selectedMessage?.id === msg.id ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className={`font-semibold text-sm ${msg.status === 'new' ? 'text-slate-900' : 'text-slate-600'}`}>{msg.name}</span>
                        {msg.status === 'new' && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
                      </div>
                      <span className="text-xs text-slate-500 block mb-2">{msg.service || 'General Inquiry'}</span>
                      <span className={`text-xs block truncate ${msg.status === 'new' ? 'text-slate-700 font-medium' : 'text-slate-500'}`}>{msg.message}</span>
                    </button>
                  ))}
                  {messages.length === 0 && <div className="p-8 text-center text-sm text-slate-500">No messages yet.</div>}
                </div>
              </div>

              {/* Detail view */}
              <div className="w-2/3 flex flex-col bg-slate-50/50">
                {selectedMessage ? (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{selectedMessage.name}</h3>
                        <a href={`mailto:${selectedMessage.email}`} className="text-sm text-blue-600 hover:underline">{selectedMessage.email}</a>
                      </div>
                      <button onClick={() => handleDeleteMessage(selectedMessage.id)} className="text-red-500 hover:bg-red-50 p-2 rounded flex items-center text-sm">
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 mb-8 bg-white p-4 rounded-lg border border-slate-200 text-sm">
                      <div><span className="text-slate-500 block text-xs uppercase tracking-wider">Company</span><span className="font-medium">{selectedMessage.company || '-'}</span></div>
                      <div><span className="text-slate-500 block text-xs uppercase tracking-wider">Phone</span><span className="font-medium">{selectedMessage.phone || '-'}</span></div>
                      <div><span className="text-slate-500 block text-xs uppercase tracking-wider">Service Interest</span><span className="font-medium">{selectedMessage.service || 'None specified'}</span></div>
                      <div><span className="text-slate-500 block text-xs uppercase tracking-wider">Received</span><span className="font-medium">
                        {selectedMessage.createdAt?.toDate ? selectedMessage.createdAt.toDate().toLocaleString() : 'Just now'}
                      </span></div>
                    </div>

                    <div>
                      <span className="text-slate-500 block text-xs uppercase tracking-wider mb-2">Message Content</span>
                      <div className="bg-white p-6 rounded-lg border border-slate-200 text-slate-700 whitespace-pre-wrap">
                        {selectedMessage.message}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                    <Mail className="h-12 w-12 mb-4 text-slate-300" />
                    <p>Select a message to read</p>
                  </div>
                )}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
