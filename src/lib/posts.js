/**
 * Posts loader utility
 * Loads markdown files from content/posts directory using Vite's import.meta.glob
 */

import matter from 'gray-matter';

// Get all markdown files from content/posts
const postsModules = import.meta.glob('/content/posts/*.md', { eager: true });

/**
 * Get all posts sorted by date (newest first)
 * @returns {Array} Array of post objects with frontmatter and content
 */
export function getAllPosts() {
  const posts = Object.keys(postsModules).map((path) => {
    const module = postsModules[path];
    const content = module.default;
    const { data, content: body } = matter(content);
    
    // Extract slug from filename
    const slug = path
      .split('/')
      .pop()
      .replace(/\.md$/, '');
    
    return {
      slug,
      ...data,
      body,
      path,
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
}

/**
 * Get a single post by slug
 * @param {string} slug - Post slug
 * @returns {Object|null} Post object or null if not found
 */
export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Get posts by category
 * @param {string} category - Category name
 * @returns {Array} Array of posts in the category
 */
export function getPostsByCategory(category) {
  const posts = getAllPosts();
  return posts.filter((post) => post.category === category);
}

