import blackbg from "../assets/blackbg.avif";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${blackbg})`,
        }}
      />

      {/* Glass Blur Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

      {/* Content */}
      <div
       
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-gray-300 grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        {/* Column 1 */}
        <div>
          <h3 className="text-white text-xl font-unbounded font-semibold mb-4 flex items-center gap-2">
             FEELZ FILMS
          </h3>
          <p className="text-sm leading-relaxed">
            20619 Torrence Chapel Rd <br />
            Suite 116 #1040 <br />
            Cornelius, NC 28031 <br />
            United States
          </p>

          <div className="mt-4 text-sm">
            <p>
              <span className="font-medium text-white">Phone:</span>{" "}
              1-800-201-1019
            </p>
            <p>
              <span className="font-medium text-white">Email:</span>{" "}
              support@skipmatrix.com
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2 text-sm">
            <li>Pricing</li>
            <li>Resources</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="relative z-10 border-t border-white/10 mt-6">
        <p className="text-center text-sm text-gray-400 py-6">
          © 2025 . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
