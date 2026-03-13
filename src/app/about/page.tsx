import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookOpen, Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-parchment dark:bg-background py-20 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold text-secondary dark:text-parchment mb-6">Our Mission</h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              We're on a mission to make academic success accessible by reducing the burden of expensive textbooks.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">The Problem & Our Solution</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Every year, students spend thousands on textbooks that end up gathering dust on shelves after a single semester. 
                    Meanwhile, new students struggle with the rising costs of education materials.
                  </p>
                  <p>
                    <strong>Pusthaka</strong> provides a trusted, student-only marketplace where knowledge is recycled. 
                    Our platform facilitates safe exchanges, rentals, and sales, ensuring books reach the hands of those who need them most at a fraction of the cost.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                    <p className="text-primary font-semibold text-lg">
                      We aim to reduce student book costs by 60% across India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-parchment dark:bg-background p-8 rounded-3xl border border-border shadow-sm">
                  <Target className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">Democratize access to academic resources through circular economy.</p>
                </div>
                <div className="bg-parchment dark:bg-background p-8 rounded-3xl border border-border shadow-sm">
                  <Eye className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To become India's largest academic book exchange network.</p>
                </div>
                <div className="bg-parchment dark:bg-background p-8 rounded-3xl border border-border shadow-sm">
                  <Users className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Student First</h3>
                  <p className="text-sm text-muted-foreground">Every feature is designed to put money back in student pockets.</p>
                </div>
                <div className="bg-parchment dark:bg-background p-8 rounded-3xl border border-border shadow-sm">
                  <BookOpen className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">All listings are verified for quality and legitimacy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
