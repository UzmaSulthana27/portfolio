// import { ArrowUp } from "lucide-react"

// export const Footer=()=>{
//     return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
//         <p className="text-sm text-muted-foreground "> &copy; {new Date().getFullYear()} UzmaTech.co , All rights reserved.</p>
//         <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
//             <ArrowUp size={20}/>
//         </a>
//     </footer>
// }

import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-gradient-to-r from-primary/10 via-card to-primary/10 relative border-t border-border mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer text */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">UzmaTech.co</span> , All
          rights reserved.
        </p>

        {/* Back to top button */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary text-white hover:bg-primary/80 transition-all shadow-md hover:shadow-lg animate-bounce"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
