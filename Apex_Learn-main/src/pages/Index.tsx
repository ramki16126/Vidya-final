import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Code2,
  GitBranch,
  Calendar,
  Map,
  Atom,
  Stethoscope,
  Code,
  ArrowRight,
  Menu,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="w-full py-6 bg-white border-b">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">EduPath</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#roadmaps" className="hover:text-blue-600 transition-colors">Roadmaps</a>
            <a href="#resources" className="hover:text-blue-600 transition-colors">Resources</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/courses">
              <Button variant="ghost">Courses</Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700">Dashboard</Button>
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-16 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Your Complete Learning Platform for{" "}
                <span className="text-blue-600">JEE, NEET & BTech</span> Students
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Everything you need to excel in competitive exams and kickstart your tech career.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline">
                    Browse Courses
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <GraduationCap className="h-64 w-64 mx-auto text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Who Is This For?</h2>
              <p className="text-lg text-slate-600">Tailored learning paths for every student</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* JEE Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-blue-100 rounded-2xl">
                  <Atom className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">JEE Aspirants</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive Video Lectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Mock Tests & Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Doubt Solving</span>
                  </li>
                </ul>
              </div>

              {/* NEET Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-green-100 rounded-2xl">
                  <Stethoscope className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">NEET Aspirants</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>NCERT Focused Content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Practice Questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Expert Mentorship</span>
                  </li>
                </ul>
              </div>

              {/* BTech Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-purple-100 rounded-2xl">
                  <Code className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">BTech Students</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>CS Fundamentals & DSA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Project-Based Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Career Roadmaps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section id="resources" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Features</h2>
              <p className="text-lg text-slate-600">Everything you need in one place</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-48 p-8 hover:-translate-y-2 duration-300">
                <BookOpen className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg text-slate-900">CS Fundamentals</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-48 p-8 hover:-translate-y-2 duration-300">
                <Code2 className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg text-slate-900">DSA Mastery</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-48 p-8 hover:-translate-y-2 duration-300">
                <Map className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg text-slate-900">Personalized Roadmaps</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-48 p-8 hover:-translate-y-2 duration-300">
                <Calendar className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg text-slate-900">Internship Calendar</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-48 p-8 hover:-translate-y-2 duration-300">
                <GitBranch className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg text-slate-900">Git & GitHub</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-48 p-8 hover:-translate-y-2 duration-300">
                <GraduationCap className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg text-slate-900">AI Study Chatbot</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Start Your Journey Today.
                  <br />
                  <span className="text-blue-100">Unlock Your Potential with EduPath.</span>
                </h2>
                <Link to="/dashboard">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 shadow-lg text-lg px-8 py-6">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-2xl text-slate-900">EduPath</span>
              </div>
              <p className="text-slate-600 mb-6 max-w-xs">
                Empowering students to achieve their academic goals and build successful careers in technology.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>© 2024 EduPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
