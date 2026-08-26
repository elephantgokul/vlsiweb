var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key';

if (typeof window !== 'undefined' && window.supabase && window.supabase.createClient) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

window.SUPABASE_BUCKETS = {
  faculty: 'faculty',
  students: 'students',
  gallery: 'gallery',
  alumni: 'alumni',
  achievements: 'achievements',
  events: 'events',
  notices: 'notices'
};

window.isSupabaseConfigured = function() {
  return SUPABASE_URL !== 'https://your-project.supabase.co' && SUPABASE_ANON_KEY !== 'your-anon-key';
};

window.resolveSupabaseImageUrl = function(path, bucket, fallback) {
  if (!path) return fallback || '';
  if (!window.isSupabaseConfigured()) return fallback || '';
  if (path.startsWith('http')) return path;
  var cleanPath = path.replace(/^\//, '');
  var publicUrl = SUPABASE_URL + '/storage/v1/object/public/' + bucket + '/' + cleanPath;
  return publicUrl;
};

window.listSupabaseBucketFiles = async function(bucket, options) {
  if (!window.isSupabaseConfigured() || !window.supabaseClient) return [];
  options = options || {};
  var limit = options.limit || 100;
  try {
    var _ref = await window.supabaseClient.storage.from(bucket).list('', { limit: limit, sortBy: { column: 'created_at', order: 'desc' } }),
        data = _ref.data,
        error = _ref.error;
    if (error) throw error;
    return (data || []).map(function(file) {
      return {
        name: file.name,
        publicUrl: SUPABASE_URL + '/storage/v1/object/public/' + bucket + '/' + file.name,
        size: file.metadata?.size,
        createdAt: file.created_at
      };
    });
  } catch (e) {
    console.error('[Supabase] List files error:', e);
    return [];
  }
};