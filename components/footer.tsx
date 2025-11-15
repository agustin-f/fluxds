export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} FLUX Design System. Created by{" "}
            <span className="text-primary font-medium">Agustín Farisano</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#typography" className="hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="#components" className="hover:text-primary transition-colors">
              Components
            </a>
            <a href="#template" className="hover:text-primary transition-colors">
              Examples
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
