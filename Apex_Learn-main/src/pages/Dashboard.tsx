import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";
import { Atom, Stethoscope, Code } from "lucide-react";

const Dashboard = () => {
  const categories = [
    {
      title: "JEE Preparation",
      description: "Master Physics, Chemistry, and Mathematics for engineering entrance exams.",
      icon: Atom,
      category: "JEE",
      gradient: "border-l-4 border-l-primary",
    },
    {
      title: "NEET Preparation",
      description: "Comprehensive Biology, Physics, and Chemistry for medical entrance exams.",
      icon: Stethoscope,
      category: "NEET",
      gradient: "border-l-4 border-l-chart-3",
    },
    {
      title: "BTech Courses",
      description: "Computer Science, Electronics, and Engineering subjects for college students.",
      icon: Code,
      category: "BTECH",
      gradient: "border-l-4 border-l-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Welcome to EduPath!
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Choose a category to start learning
          </p>
        </div>

        {/* Categories Grid */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Explore Categories
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.category} {...cat} />
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-12">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Your Learning Stats
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-primary/5 p-4 text-center">
                <p className="text-3xl font-bold text-primary">0</p>
                <p className="text-sm text-muted-foreground">Courses Started</p>
              </div>
              <div className="rounded-lg bg-chart-3/10 p-4 text-center">
                <p className="text-3xl font-bold text-chart-4">0</p>
                <p className="text-sm text-muted-foreground">Hours Learned</p>
              </div>
              <div className="rounded-lg bg-secondary/10 p-4 text-center">
                <p className="text-3xl font-bold text-secondary">0</p>
                <p className="text-sm text-muted-foreground">Certificates</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
