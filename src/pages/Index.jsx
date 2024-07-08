import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg mt-2">A place to share knowledge and ideas</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Post Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This is a short excerpt from the blog post...</p>
              <Button variant="link">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This is a short excerpt from the blog post...</p>
              <Button variant="link">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Post Title 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This is a short excerpt from the blog post...</p>
              <Button variant="link">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <aside className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Search</h2>
        <Input placeholder="Search..." className="mb-4" />
        <Separator className="my-4" />
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="list-disc list-inside">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
        <Separator className="my-4" />
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <ul className="list-disc list-inside">
          <li>Recent Post 1</li>
          <li>Recent Post 2</li>
          <li>Recent Post 3</li>
        </ul>
      </aside>
    </div>
  );
};

export default Index;