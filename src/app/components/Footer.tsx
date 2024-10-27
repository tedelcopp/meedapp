const Footer = () => {
  return (
      <footer className="bg-gray-900 text-gray-400 py-10 px-6 min-h-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
              {/* Logo and Description */}
              <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-2">
                      {/* Logo */}
                      {/* <img src="/path-to-logo.svg" alt="Logo" className="w-8 h-8" /> */}
                      <span className="text-white text-lg font-semibold">Rugel Fitness</span>
                  </div>
                  <p className="mt-4">
                      Making the world a better place through constructing elegant hierarchies.
                  </p>
                  {/* Social Media Icons */}
                  <div className="flex space-x-4 mt-4">
                      {/* Facebook Icon */}
                      <a href="#" className="text-gray-400 hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.675 0h-21.35c-0.733 0-1.325 0.592-1.325 1.325v21.351c0 0.733 0.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.464 0.099 2.795 0.143v3.24l-1.919 0.001c-1.505 0-1.796 0.715-1.796 1.763v2.311h3.589l-0.467 3.622h-3.122v9.294h6.116c0.733 0 1.325-0.591 1.325-1.324v-21.351c0-0.733-0.592-1.325-1.325-1.325z" />
                          </svg>
                      </a>
                      {/* Instagram Icon */}
                      <a href="#" className="text-gray-400 hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584 0.013 4.85 0.07 1.366 0.063 2.633 0.36 3.608 1.335 0.975 0.975 1.272 2.242 1.335 3.608 0.057 1.266 0.07 1.646 0.07 4.85s-0.013 3.584-0.07 4.85c-0.063 1.366-0.36 2.633-1.335 3.608-0.975 0.975-2.242 1.272-3.608 1.335-1.266 0.057-1.646 0.07-4.85 0.07s-3.584-0.013-4.85-0.07c-1.366-0.063-2.633-0.36-3.608-1.335-0.975-0.975-1.272-2.242-1.335-3.608-0.057-1.266-0.07-1.646-0.07-4.85s0.013-3.584 0.07-4.85c0.063-1.366 0.36-2.633 1.335-3.608 0.975-0.975 2.242-1.272 3.608-1.335 1.266-0.057 1.646-0.07 4.85-0.07zM12 0c-3.26 0-3.667 0.013-4.947 0.072-1.472 0.065-2.792 0.375-3.85 1.433s-1.368 2.378-1.433 3.85c-0.059 1.281-0.072 1.687-0.072 4.947s0.013 3.667 0.072 4.947c0.065 1.472 0.375 2.792 1.433 3.85s2.378 1.368 3.85 1.433c1.281 0.059 1.687 0.072 4.947 0.072s3.667-0.013 4.947-0.072c1.472-0.065 2.792-0.375 3.85-1.433s1.368-2.378 1.433-3.85c0.059-1.281 0.072-1.687 0.072-4.947s-0.013-3.667-0.072-4.947c-0.065-1.472-0.375-2.792-1.433-3.85s-2.378-1.368-3.85-1.433c-1.281-0.059-1.687-0.072-4.947-0.072z" />
                              <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 15.462c-1.91 0-3.462-1.552-3.462-3.462s1.552-3.462 3.462-3.462 3.462 1.552 3.462 3.462-1.552 3.462-3.462 3.462z" />
                              <circle cx="18.406" cy="5.594" r="1.44" />
                          </svg>
                      </a>
                      {/* GitHub Icon */}
                      <a href="#" className="text-gray-400 hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.998.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.403c1.018.004 2.044.137 3.003.403 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.61-2.803 5.623-5.475 5.92.429.371.823 1.102.823 2.222v3.293c0 .321.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                      </a>
                  </div>
              </div>
              {/* Other sections */}
              <div>
                  <h4 className="text-white font-semibold">Section 1</h4>
                  <ul className="mt-4 space-y-2">
                      <li><a href="#" className="hover:underline">Link 1</a></li>
                      <li><a href="#" className="hover:underline">Link 2</a></li>
                  </ul>
              </div>
              <div>
                  <h4 className="text-white font-semibold">Section 2</h4>
                  <ul className="mt-4 space-y-2">
                      <li><a href="#" className="hover:underline">Link 3</a></li>
                      <li><a href="#" className="hover:underline">Link 4</a></li>
                  </ul>
              </div>
              <div>
                  <h4 className="text-white font-semibold">Section 3</h4>
                  <ul className="mt-4 space-y-2">
                      <li><a href="#" className="hover:underline">Link 5</a></li>
                      <li><a href="#" className="hover:underline">Link 6</a></li>
                  </ul>
              </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
              &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
      </footer>
  );
};

export default Footer;
