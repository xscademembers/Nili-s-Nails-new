'use client';

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, X, ImageIcon, Loader2 } from 'lucide-react';

interface GalleryItem {
  _id: string;
  title: string;
  category: 'Hair' | 'Skin' | 'Nails';
  image: string;
  createdAt: string;
}

export default function AdminGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [form, setForm] = useState({ title: '', category: 'Nails' as string, image: '' });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/admin/gallery');
      const data = await res.json();
      setItems(data);
    } catch { /* empty */ }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const flash = (text: string, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const openAdd = () => {
    setEditing(null);
    setForm({ title: '', category: 'Nails', image: '' });
    setShowModal(true);
  };

  const openEdit = (item: GalleryItem) => {
    setEditing(item);
    setForm({ title: item.title, category: item.category, image: item.image });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.image) return;
    setSaving(true);

    try {
      if (editing) {
        await fetch(`/api/admin/gallery/${editing._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        flash('Photo updated successfully');
      } else {
        await fetch('/api/admin/gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        flash('Photo added successfully');
      }
      setShowModal(false);
      fetchItems();
    } catch {
      flash('Error saving photo', 'error');
    }

    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this photo?')) return;

    try {
      await fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' });
      flash('Photo deleted');
      fetchItems();
    } catch {
      flash('Error deleting photo', 'error');
    }
  };

  const getImageSrc = (image: string) => {
    const trimmed = image.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('/')) return trimmed;
    return `/api/image-proxy?url=${encodeURIComponent(trimmed)}`;
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-serif text-[#333] truncate">Gallery Management</h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#E7646A] text-white px-4 sm:px-5 py-2.5 rounded-xl text-sm hover:bg-[#d4545a] transition-colors flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Photo</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {message.text && (
        <div
          className={`mb-4 p-3 rounded-xl text-sm ${
            message.type === 'error'
              ? 'bg-red-50 text-red-700'
              : 'bg-green-50 text-green-700'
          }`}
        >
          {message.text}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#E7646A]" />
        </div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
          <ImageIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500">No photos yet</p>
          <p className="text-gray-400 text-sm mt-1">
            Click &ldquo;Add Photo&rdquo; to get started
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={getImageSrc(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:bg-none sm:bg-black/0 sm:group-hover:bg-black/30 transition-all flex items-end sm:items-center justify-center gap-3 p-3 sm:p-0 sm:opacity-0 sm:group-hover:opacity-100">
                  <button
                    onClick={() => openEdit(item)}
                    className="bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <Pencil className="w-4 h-4 text-[#333]" />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm text-[#333]">{item.title}</h3>
                <span className="text-[10px] uppercase tracking-wider text-[#E7646A] font-semibold">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">
                {editing ? 'Edit Photo' : 'Add New Photo'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                  placeholder="e.g., Pearl Finish"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                >
                  <option value="Hair">Hair</option>
                  <option value="Skin">Skin</option>
                  <option value="Nails">Nails</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              {form.image && (
                <div className="rounded-xl overflow-hidden aspect-video bg-gray-100">
                  <img
                    src={getImageSrc(form.image)}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <button
                onClick={handleSave}
                disabled={saving || !form.title || !form.image}
                className="w-full bg-[#E7646A] text-white py-3 rounded-xl text-sm uppercase tracking-widest hover:bg-[#d4545a] transition-all disabled:opacity-50"
              >
                {saving ? 'Saving...' : editing ? 'Update Photo' : 'Add Photo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
