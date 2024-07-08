import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post Title 1", content: "This is a short excerpt from the blog post..." },
    { id: 2, title: "Post Title 2", content: "This is a short excerpt from the blog post..." },
    { id: 3, title: "Post Title 3", content: "This is a short excerpt from the blog post..." },
  ]);
  const [postToDelete, setPostToDelete] = useState(null);

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
    toast.success("Blog post deleted successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg mt-2">Read the latest posts</p>
      </header>
      <section className="my-8">
        <Link to="/add-blog-post">
          <Button variant="primary">Add New Post</Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {posts.map(post => (
            <div key={post.id} className="border p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="mb-4">{post.content}</p>
              <div className="flex justify-between">
                <Button variant="link">Read More</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" onClick={() => setPostToDelete(post.id)}>Delete</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Deletion</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this blog post? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setPostToDelete(null)}>Cancel</Button>
                      <Button variant="destructive" onClick={() => handleDelete(postToDelete)}>Delete</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;