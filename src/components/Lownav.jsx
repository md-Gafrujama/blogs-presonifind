// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaChevronDown, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
// import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
// import Logo1 from "@/assets/Logo1.png";
// import Logo2 from "@/assets/Logo2.png";

// const LowNav = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [solutionsOpen, setSolutionsOpen] = useState(false);
//     const [resourcesOpen, setResourcesOpen] = useState(false);
//     const [screenSize, setScreenSize] = useState({
//         isSmall: false,
//         isMedium: false,
//         isXLarge: false,
//         isDesktop: false,
//         showGetStarted: true
//     });

//     const toggleMenu = useCallback(() => {
//         setIsOpen(prev => !prev);
//         setServicesOpen(false);
//         setSolutionsOpen(false);
//         setResourcesOpen(false);
//     }, []);

//     const checkScreenSize = useCallback(() => {
//         const width = window.innerWidth;
//         const userAgent = navigator.userAgent.toLowerCase();
//         const isIPad = /ipad|ipod|iphone/.test(userAgent);
//         const isSurface = /surface/.test(userAgent);
//         const isTablet = (width >= 768 && width <= 1024) || isIPad || isSurface;

//         setScreenSize({
//             isSmall: width < 768,
//             isMedium: width >= 768 && width < 1400,
//             isXLarge: width >= 1400 && width < 1700,
//             isDesktop: width >= 1700,
//             showGetStarted: !isTablet
//         });

//         if (width >= 768) {
//             setServicesOpen(false);
//             setSolutionsOpen(false);
//             setResourcesOpen(false);
//         }
//     }, []);

//     useEffect(() => {
//         checkScreenSize();
//         const resizeHandler = () => {
//             checkScreenSize();
//             // Debounce for performance
//             let timeout;
//             clearTimeout(timeout);
//             timeout = setTimeout(checkScreenSize, 100);
//         };

//         window.addEventListener('resize', resizeHandler);
//         return () => window.removeEventListener('resize', resizeHandler);
//     }, [checkScreenSize]);

//     const getResponsiveStyles = useCallback(() => {
//         if (screenSize.isXLarge) {
//             return { textSize: 'text-xl', gap: 'gap-14', justify: 'justify-end' };
//         } else if (screenSize.isMedium) {
//             return { textSize: 'text-lg', gap: 'gap-10', justify: 'justify-center' };
//         } else if (screenSize.isDesktop) {
//             return { textSize: 'text-3xl', gap: 'gap-14', justify: 'justify-center' };
//         } else {
//             return { textSize: 'text-base', gap: 'gap-12', justify: 'justify-center' };
//         }
//     }, [screenSize]);

//     const responsiveStyles = getResponsiveStyles();

//     const toggleSolutions = useCallback(() => {
//         if (screenSize.isSmall) {
//             setSolutionsOpen(prev => !prev);
//             if (!solutionsOpen) {
//                 setServicesOpen(false);
//                 setResourcesOpen(false);
//             }
//         }
//     }, [screenSize.isSmall, solutionsOpen]);

//     const toggleServices = useCallback(() => {
//         if (screenSize.isSmall) {
//             setServicesOpen(prev => !prev);
//             if (!servicesOpen) {
//                 setSolutionsOpen(false);
//                 setResourcesOpen(false);
//             }
//         }
//     }, [screenSize.isSmall, servicesOpen]);

//     const toggleResources = useCallback(() => {
//         if (screenSize.isSmall) {
//             setResourcesOpen(prev => !prev);
//             if (!resourcesOpen) {
//                 setSolutionsOpen(false);
//                 setServicesOpen(false);
//             }
//         }
//     }, [screenSize.isSmall, resourcesOpen]);

//     // Menu items data for better maintainability
//     const solutionsItems = [
//         { name: 'B2B Content Syndication', link: '/ContentSyndication' },
//         { name: 'Display Advertising', link: '/DisplayAds' },
//         { name: 'Sales Development', link: '/SalesDevelopment' },
//     ];

//     const solutionsDesktopItems = [
//         { name: 'Connect', subText: 'B2B Content Syndication', image: '/images/b2b.jpg', link: '/ContentSyndication' },
//         { name: 'Engage', subText: 'Display Advertising', image: '/images/advertise.jpg', link: '/DisplayAds' },
//         { name: 'Convert', subText: 'Sales Development', image: '/images/sales.jpg', link: '/SalesDevelopment' },
//     ];

//     const audienceItems = [
//         { name: 'Our IT by audience', link: '/IT' },
//         { name: 'Our Marketing by audience', link: '/AudienceMarketing' },
//         { name: 'Our Sales by audience', link: '/AudienceSales' },
//         { name: 'Our Finance by audience', link: '/Finance' },
//     ];

//     const audienceDesktopItems = [
//         { name: 'IT', subText: 'Our IT by audience', image: '/images/IT.webp', link: '/IT' },
//         { name: 'Marketing', subText: 'Our Marketing by audience', image: '/images/marketing.webp', link: '/AudienceMarketing' },
//         { name: 'Sales', subText: 'Our Sales by audience', image: '/images/sales.webp', link: '/AudienceSales' },
//         { name: 'Finance', subText: 'Our Finance by audience', image: '/images/finance.webp', link: '/Finance' },
//     ];

//     const resourcesItems = [
//         { name: 'White Paper', link: '#' },
//         { name: 'Blogs', link: '/Blogs' },
//     ];

//     return (
//         <nav 
//             className="fixed top-[56px] left-0 right-0 z-40 text-black bg-white px-4 py-3 flex justify-between items-center flex-wrap h-auto lg:h-[100px]"
//             aria-label="Main navigation"
//         >
//             <div className="flex items-center gap-x-1">
//   <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded">
//     <Image
//       src={Logo1}
//       alt="Company Logo Part 1"
//       width={96}
//       height={96}
//       className="h-12 lg:h-12 w-auto"
//       priority
//     />
//   </Link>
//   <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded">
//     <Image
//       src={Logo2}
//       alt="Company Logo Part 2"
//       width={96}
//       height={96}
//       className="h-12 lg:h-24 w-auto"
//       priority
//     />
//   </Link>
// </div>

//            <button
//         className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-[#386861] rounded p-1"
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//         aria-expanded={isOpen}
//     >
//         {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//     </button>

//     <ul
//         className={`flex flex-col md:flex-row md:flex items-start md:items-center ${responsiveStyles.gap} w-full md:w-auto mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex ${responsiveStyles.justify}`}
//     >
//         <li className="relative group">
//             <Link href="/"
//                 className={`hover:text-gray-700 border-0 font-bold ${responsiveStyles.textSize} transition-colors focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
//             >
//                 Home
//             </Link>
//         </li>
//         <li className="relative group">
//             <Link href="/About"
//                 className={`hover:text-gray-700 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
//             >
//                 About Us
//             </Link>
//         </li>

//         {/* SOLUTIONS */}
//         <li className="relative group">
//             <button
//                 onClick={toggleSolutions}
//                 type="button"
//                 className={`hover:text-gray-700 flex items-center gap-1 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
//                 aria-expanded={solutionsOpen}
//             >
//                 Solutions <FaChevronDown size={12} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
//             </button>
//             <ul
//                 className={`${screenSize.isSmall ? (solutionsOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'hidden'} bg-white shadow-xl transition-all duration-300 rounded-xl mt-1`}
//                 aria-hidden={!solutionsOpen}
//             >
//                 {solutionsItems.map((item, i) => (
//                     <li key={i} className="px-4 py-3 hover:bg-[#386861] hover:text-white text-lg border-b border-[#e6d9a1] last:border-b-0">
//                         <Link href={item.link}
//                             className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-white rounded"
//                         >
//                             {item.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//             {/* Desktop */}
//             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all origin-top">
//                 <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200">
//                     <div className="grid grid-cols-3 gap-4 p-4 w-max">
//                         {solutionsDesktopItems.map((item, index) => (
//                             <div key={index} className="relative w-56 h-56 overflow-hidden rounded-lg group/item">
//                                 <Image
//                                     src={item.image}
//                                     alt={item.name}
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="opacity-90 group-hover/item:opacity-100 transition-opacity duration-300"
//                                     loading="lazy"
//                                 />
//                                 <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
//                                     <h3 className="text-xl font-bold mb-1 text-white">{item.name}</h3>
//                                     <p className="text-sm text-white/90">{item.subText}</p>
//                                 </div>
//                                 <Link href={item.link}
//                                     className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-white rounded"
//                                 ></Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </li>

//         {/* AUDIENCES DROPDOWN */}
//         <li className="relative group">
//             <button
//                 onClick={toggleServices}
//                 type="button"
//                 className={`hover:text-gray-700 flex items-center gap-1 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
//                 aria-expanded={servicesOpen}
//             >
//                 Audience <FaChevronDown size={12} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
//             </button>
//             <ul
//                 className={`${screenSize.isSmall ? (servicesOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'hidden'} bg-white shadow-xl transition-all duration-300 rounded-xl mt-1`}
//                 aria-hidden={!servicesOpen}
//             >
//                 {audienceItems.map((item, index) => (
//                     <li key={index} className="px-4 py-3 hover:bg-[#386861] hover:text-white text-lg border-b border-[#e6d9a1] last:border-b-0">
//                         <Link href={item.link}
//                             className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-white rounded"
//                         >
//                             {item.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//             {/* Desktop */}
//             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all origin-top">
//                 <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200">
//                     <div className="flex gap-4 p-4 w-max">
//                         {audienceDesktopItems.map((item, index) => (
//                             <div key={index} className="relative w-48 h-48 overflow-hidden rounded-lg group/item">
//                                 <Image
//                                     src={item.image}
//                                     alt={item.name}
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="opacity-90 group-hover/item:opacity-100 transition-opacity duration-300"
//                                     loading="lazy"
//                                 />
//                                 <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
//                                     <h3 className="text-lg font-bold mb-1 text-white">{item.name}</h3>
//                                     <p className="text-sm text-white/90">{item.subText}</p>
//                                 </div>
//                                 <Link href={item.link}
//                                     className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-white rounded"
//                                 ></Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </li>

//         {/* RESOURCES */}
//         <li className="relative group">
//             <button
//                 onClick={toggleResources}
//                 type="button"
//                 className={`hover:text-gray-700 flex items-center gap-1 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
//                 aria-expanded={resourcesOpen}
//             >
//                 Resources <FaChevronDown size={12} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
//             </button>
//             <ul
//                 className={`${screenSize.isSmall ? (resourcesOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible') : 'absolute left-0 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100'} bg-white shadow-xl transition-all duration-300 w-[300px] rounded-xl mt-8`}
//                 aria-hidden={!resourcesOpen}
//             >
//                 <div>
//                     {resourcesItems.map((item, index) => (
//                         <li key={index} className="px-4 py-3 hover:bg-[#386861] hover:text-white text-lg border-b border-[#e6d9a1] last:border-b-0">
//                             <Link href={item.link}
//                                 className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-white rounded"
//                             >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </div>
//             </ul>
//         </li>

//         <li>
//             <Link href="/Contact"
//                 className={`hover:text-gray-700 font-bold ${responsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded`}
//             >
//                 Contact
//             </Link>
//         </li>

//         <li className="flex flex-col gap-2 mt-4 md:hidden text-base text-gray-700">
//             <span>example@gmail.com</span>
//             <span>+3929 299 453</span>
//             <div className="flex gap-3 mt-2 text-[#386861]">
//                 {[
//                     { icon: <FaFacebookF />, label: 'Facebook' },
//                     { icon: <FaInstagram />, label: 'Instagram' },
//                     { icon: <FaPinterestP />, label: 'Pinterest' },
//                     { icon: <FaYoutube />, label: 'YouTube' }
//                 ].map((social, i) => (
//                     <a
//                         key={i}
//                         href="#"
//                         aria-label={social.label}
//                         className="hover:text-[#294944] focus:outline-none focus:ring-2 focus:ring-[#386861] rounded-full p-1"
//                     >
//                         {social.icon}
//                     </a>
//                 ))}
//             </div>
//         </li>
//     </ul>

//     {screenSize.showGetStarted && (
//         <Link href="/Contact"
//             className={`
//                 hidden md:block bg-[#386861] text-white py-2 px-6 font-bold rounded-2xl
//                 transition-all duration-300 hover:bg-[#294944] mt-4 md:mt-0 w-full md:w-auto
//                 ${responsiveStyles.textSize} relative overflow-hidden group hover:shadow-lg hover:shadow-[#294944]/50
//                 transform hover:-translate-y-1 active:translate-y-0
//                 focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2
//             `}
//         >
//             Get Started Now ↗
//             <span className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#F7D270]/60 to-transparent group-hover:opacity-100 transition-opacity duration-500"></span>
//             <span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/20 group-hover:w-64 group-hover:h-64 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
//         </Link>
//     )}
// </nav>
// );
// };

// export default LowNav

'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Logo1 from "@/assets/Logo1.png";
import Logo2 from "@/assets/Logo2.png";

// Optimized debounce function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const LowNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [screenSize, setScreenSize] = useState({
        isSmall: false,
        isMedium: false,
        isXLarge: false,
        isDesktop: false,
        showGetStarted: true
    });

    // Timeout refs for handling hover delays
    const timeoutRefs = useMemo(() => ({
        solutions: null,
        services: null,
        resources: null
    }), []);

    // Track if dropdown was opened by click (for better UX)
    const [clickedDropdown, setClickedDropdown] = useState(null);

    // Memoized navigation data
    const navigationData = useMemo(() => ({
        solutionsItems: [
            { name: 'B2B Content Syndication', href: '/ContentSyndication' },
            { name: 'Display Advertising', href: '/DisplayAds' },
            { name: 'Sales Development', href: '/SalesDevelopment' },
        ],
        solutionsDesktopItems: [
            { 
                name: 'B2B Content Syndication', 
                subText: '', 
                image: '/images/b2b.jpg', 
                href: '/ContentSyndication',
                alt: 'B2B Content Syndication - Connect with your target audience'
            },
            { 
                name: 'B2B Data & Intent',
                subText: '', 
                image: '/images/sales.jpg', 
                href: '/DisplayAds',
                alt: 'Display Advertising - Engage potential customers'
            },
            { 
                name: 'Sales Development', 
                subText: '', 
                image: '/images/advertise.jpg', 
                href: '/SalesDevelopment',
                alt: 'Sales Development - Convert leads to customers'
            },
        ],
        resourcesItems: [
            // { name: 'White Paper', href: '/whitepaper', description: 'Industry insights and research' },
            { name: 'Blogs', href: 'https://blogs-presonifind-oy62.vercel.app/Blogs', description: 'Latest trends and updates' },
        ],
        socialMedia: [
            { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com/yourcompany' },
            { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/yourcompany' },
            { icon: <FaPinterestP />, label: 'Pinterest', href: 'https://pinterest.com/yourcompany' },
            { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com/yourcompany' }
        ]
    }), []);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
        setServicesOpen(false);
        setSolutionsOpen(false);
        setResourcesOpen(false);
        setClickedDropdown(null);
    }, []);

    const checkScreenSize = useCallback(() => {
        if (typeof window === 'undefined') return;
        
        const width = window.innerWidth;
        const userAgent = navigator.userAgent.toLowerCase();
        const isIPad = /ipad|ipod|iphone/.test(userAgent);
        const isSurface = /surface/.test(userAgent);
        const isTablet = (width >= 768 && width <= 1024) || isIPad || isSurface;

        setScreenSize({
            isSmall: width < 768,
            isMedium: width >= 768 && width < 1400,
            isXLarge: width >= 1400 && width < 1700,
            isDesktop: width >= 1700,
            showGetStarted: !isTablet
        });

        if (width >= 768) {
            setIsOpen(false);
            if (!clickedDropdown) {
                setServicesOpen(false);
                setSolutionsOpen(false);
                setResourcesOpen(false);
            }
        }
    }, [clickedDropdown]);

    // Optimized debounced resize handler
    const debouncedCheckScreenSize = useMemo(
        () => debounce(checkScreenSize, 100),
        [checkScreenSize]
    );

    useEffect(() => {
        checkScreenSize();
        
        // Close dropdowns when clicking outside
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setServicesOpen(false);
                setSolutionsOpen(false);
                setResourcesOpen(false);
                setClickedDropdown(null);
            }
        };

        // Close dropdowns on escape key
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                setServicesOpen(false);
                setSolutionsOpen(false);
                setResourcesOpen(false);
                setClickedDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        window.addEventListener('resize', debouncedCheckScreenSize);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            window.removeEventListener('resize', debouncedCheckScreenSize);
            // Clean up timeouts
            Object.values(timeoutRefs).forEach(timeout => {
                if (timeout) clearTimeout(timeout);
            });
        };
    }, [checkScreenSize, debouncedCheckScreenSize, timeoutRefs]);

    const getResponsiveStyles = useMemo(() => {
        if (screenSize.isXLarge) {
            return { textSize: 'text-xl', gap: 'gap-14', justify: 'justify-end' };
        } else if (screenSize.isMedium) {
            return { textSize: 'text-lg', gap: 'gap-10', justify: 'justify-center' };
        } else if (screenSize.isDesktop) {
            return { textSize: 'text-3xl', gap: 'gap-14', justify: 'justify-center' };
        } else {
            return { textSize: 'text-base', gap: 'gap-12', justify: 'justify-center' };
        }
    }, [screenSize]);

    const toggleSolutions = useCallback(() => {
        if (screenSize.isSmall) {
            setSolutionsOpen(prev => !prev);
            setServicesOpen(false);
            setResourcesOpen(false);
        } else {
            const newState = !solutionsOpen;
            setSolutionsOpen(newState);
            setServicesOpen(false);
            setResourcesOpen(false);
            setClickedDropdown(newState ? 'solutions' : null);
        }
    }, [screenSize.isSmall, solutionsOpen]);

    const toggleServices = useCallback(() => {
        if (screenSize.isSmall) {
            setServicesOpen(prev => !prev);
            setSolutionsOpen(false);
            setResourcesOpen(false);
        } else {
            const newState = !servicesOpen;
            setServicesOpen(newState);
            setSolutionsOpen(false);
            setResourcesOpen(false);
            setClickedDropdown(newState ? 'services' : null);
        }
    }, [screenSize.isSmall, servicesOpen]);

    const toggleResources = useCallback(() => {
        if (screenSize.isSmall) {
            setResourcesOpen(prev => !prev);
            setSolutionsOpen(false);
            setServicesOpen(false);
        } else {
            const newState = !resourcesOpen;
            setResourcesOpen(newState);
            setSolutionsOpen(false);
            setServicesOpen(false);
            setClickedDropdown(newState ? 'resources' : null);
        }
    }, [screenSize.isSmall, resourcesOpen]);

    // Improved desktop hover handlers
    const handleDesktopMouseEnter = useCallback((dropdownType) => {
        if (!screenSize.isSmall && clickedDropdown !== dropdownType) {
            if (timeoutRefs[dropdownType]) {
                clearTimeout(timeoutRefs[dropdownType]);
                timeoutRefs[dropdownType] = null;
            }

            if (!clickedDropdown) {
                switch(dropdownType) {
                    case 'solutions':
                        setSolutionsOpen(true);
                        setServicesOpen(false);
                        setResourcesOpen(false);
                        break;
                    case 'services':
                        setServicesOpen(true);
                        setSolutionsOpen(false);
                        setResourcesOpen(false);
                        break;
                    case 'resources':
                        setResourcesOpen(true);
                        setSolutionsOpen(false);
                        setServicesOpen(false);
                        break;
                }
            }
        }
    }, [screenSize.isSmall, timeoutRefs, clickedDropdown]);

    const handleDesktopMouseLeave = useCallback((dropdownType) => {
        if (!screenSize.isSmall && clickedDropdown !== dropdownType) {
            if (timeoutRefs[dropdownType]) {
                clearTimeout(timeoutRefs[dropdownType]);
            }

            if (!clickedDropdown) {
                timeoutRefs[dropdownType] = setTimeout(() => {
                    switch(dropdownType) {
                        case 'solutions':
                            setSolutionsOpen(false);
                            break;
                        case 'services':
                            setServicesOpen(false);
                            break;
                        case 'resources':
                            setResourcesOpen(false);
                            break;
                    }
                    timeoutRefs[dropdownType] = null;
                }, 150);
            }
        }
    }, [screenSize.isSmall, timeoutRefs, clickedDropdown]);

    // Memoized dropdown component for desktop (keeping original design for Solutions)
    const DesktopDropdown = React.memo(({ items, isOpen, gridCols = 'grid-cols-3', dropdownType }) => (
        <div 
            className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 mt-1 transition-all duration-200 origin-top ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
            onMouseEnter={() => handleDesktopMouseEnter(dropdownType)}
            onMouseLeave={() => handleDesktopMouseLeave(dropdownType)}
        >
            <div className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <div className={`grid ${gridCols} gap-4 p-4 w-max`}>
                    {items.map((item, index) => (
                        <Link 
                            key={`${item.name}-${index}`}
                            href={item.href}
                            className="relative w-56 h-56 overflow-hidden rounded-lg group/item block focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2 transition-transform duration-200 hover:scale-105"
                            aria-label={`Navigate to ${item.name}`}
                        >
                            <Image 
                                src={item.image} 
                                alt={item.alt || item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 224px"
                                className="object-cover opacity-90 group-hover/item:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                                quality={75}
                            />
                            <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                                <h3 className="text-xl font-bold mb-1 text-white">{item.name}</h3>
                                <p className="text-sm text-white/90">{item.subText}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    ));

    DesktopDropdown.displayName = 'DesktopDropdown';

    // Modern Resources Desktop Dropdown (text-based)
    const ResourcesDesktopDropdown = React.memo(({ items, isOpen, dropdownType }) => (
        <div 
            className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 z-50 mt-3 transition-all duration-300 ease-out origin-top ${
                isOpen 
                    ? 'opacity-100 visible pointer-events-auto scale-100 translate-y-0' 
                    : 'opacity-0 invisible pointer-events-none scale-95 -translate-y-2'
            }`}
            onMouseEnter={() => handleDesktopMouseEnter(dropdownType)}
            onMouseLeave={() => handleDesktopMouseLeave(dropdownType)}
        >
            <div className="bg-white/95 backdrop-blur-xl text-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 min-w-96">
                <div className="p-2">
                    {items.map((item, index) => (
                        <Link 
                            key={`${item.name}-${index}`}
                            href={item.href}
                            className="block p-6 rounded-xl group/item transition-all duration-300 hover:bg-gradient-to-r hover:from-[#386861]/10 hover:to-[#F7D270]/10 focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2 focus:ring-offset-white/50"
                            aria-label={`Navigate to ${item.name}`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#386861] to-[#294944] rounded-xl flex items-center justify-center text-white text-xl font-bold group-hover/item:scale-110 transition-transform duration-300">
                                    {item.name.charAt(0)}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 group-hover/item:text-[#386861] transition-colors duration-300 mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300 mb-3">
                                        {item.description}
                                    </p>
                                    <div className="inline-flex items-center text-sm font-medium text-[#386861] opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/item:translate-x-0">
                                        Explore <span className="ml-1">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    ));

    ResourcesDesktopDropdown.displayName = 'ResourcesDesktopDropdown';

    // Enhanced mobile dropdown component
    const MobileDropdown = React.memo(({ items, isOpen, ariaLabel }) => (
        <div
            className={`${
                screenSize.isSmall 
                    ? (isOpen 
                        ? 'max-h-96 opacity-100 visible transform translate-y-0' 
                        : 'max-h-0 opacity-0 invisible transform -translate-y-4'
                      ) 
                    : 'hidden'
            } bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-300 ease-out rounded-2xl mt-2 overflow-hidden border border-gray-100`}
            aria-hidden={!isOpen}
            aria-label={ariaLabel}
        >
            <div className="p-2">
                {items.map((item, index) => (
                    <Link 
                        key={`${item.name}-${index}`}
                        href={item.href}
                        className="block px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-[#386861] hover:to-[#294944] hover:text-white text-lg font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    ));

    MobileDropdown.displayName = 'MobileDropdown';

    return (
        <>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SiteNavigationElement",
                        "name": "Main Navigation",
                        "url": typeof window !== 'undefined' ? window.location.origin : '',
                        "hasPart": [
                            {
                                "@type": "SiteNavigationElement",
                                "name": "Solutions",
                                "url": "/solutions"
                            },
                            {
                                "@type": "SiteNavigationElement",
                                "name": "Resources", 
                                "url": "/resources"
                            }
                        ]
                    })
                }}
            />

            <nav 
                className="fixed top-[56px] left-0 right-0 z-40 text-black bg-white/90 backdrop-blur-xl px-4 py-3 flex justify-between items-center flex-wrap h-auto lg:h-[100px] shadow-lg border-b border-gray-100"
                aria-label="Main navigation"
                role="navigation"
            >
                <div className="flex items-center gap-x-1">
                    <Link 
                        href="/"
                        className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95"
                        aria-label="Go to homepage"
                    >
                        <Image
                            src={Logo1}
                            alt="Company Logo"
                            width={96}
                            height={96}
                            className="h-12 lg:h-12 w-auto"
                            priority
                            quality={90}
                        />
                    </Link>
                    <Link 
                        href="/"
                        className="focus:outline-none focus:ring-2 focus:ring-[#386861] rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95"
                        aria-label="Go to homepage"
                    >
                        <Image
                            src={Logo2}
                            alt="Company Logo Text"
                            width={96}
                            height={96}
                            className="h-12 lg:h-24 w-auto"
                            priority
                            quality={90}
                        />
                    </Link>
                </div>

                <button 
                    className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-[#386861] rounded-xl p-2 transition-all duration-300 hover:bg-[#386861]/10 active:scale-95"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="main-menu"
                >
                    <div className="relative w-6 h-6">
                        <HiOutlineMenu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                        <HiOutlineX className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'}`} />
                    </div>
                </button>

                <ul
                    id="main-menu"
                    className={`flex flex-col md:flex-row md:flex items-start md:items-center ${getResponsiveStyles.gap} w-full md:w-auto mt-4 md:mt-0 transition-all duration-300 ${
                        isOpen ? 'flex opacity-100 transform translate-y-0' : 'hidden opacity-0 transform -translate-y-4'
                    } md:opacity-100 md:transform-none md:flex ${getResponsiveStyles.justify}`}
                    role="menubar"
                >
                    <li role="none">
                        <Link 
                            href="/"
                            className={`relative hover:text-[#386861] border-0 font-bold ${getResponsiveStyles.textSize} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded-xl px-3 py-2 rounded-xl hover:bg-[#386861]/5 active:scale-95 group`}
                            role="menuitem"
                        >
                            Home
                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#386861] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>
                    
                    <li role="none">
                        <Link 
                            href="/About"
                            className={`relative hover:text-[#386861] font-bold ${getResponsiveStyles.textSize} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded-xl px-3 py-2 rounded-xl hover:bg-[#386861]/5 active:scale-95 group`}
                            role="menuitem"
                        >
                            About Us
                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#386861] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>

                    {/* SOLUTIONS */}
                    <li 
                        className="relative group dropdown-container" 
                        role="none"
                        onMouseEnter={() => handleDesktopMouseEnter('solutions')}
                        onMouseLeave={() => handleDesktopMouseLeave('solutions')}
                    >
                        <button 
                            onClick={toggleSolutions} 
                            type="button" 
                            className={`relative hover:text-[#386861] flex items-center gap-2 font-bold ${getResponsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded-xl px-3 py-2 rounded-xl transition-all duration-300 hover:bg-[#386861]/5 active:scale-95 group ${
                                solutionsOpen ? 'text-[#386861] bg-[#386861]/5' : ''
                            }`}
                            aria-expanded={solutionsOpen}
                            aria-haspopup="true"
                            role="menuitem"
                            aria-controls="solutions-menu"
                            title="Click to toggle or hover to open"
                        >
                            Solutions 
                            <FaChevronDown 
                                size={12} 
                                className={`transition-all duration-300 ${
                                    solutionsOpen ? 'rotate-180 text-[#386861]' : 'rotate-0'
                                }`} 
                            />
                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#386861] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </button>
                        
                        <MobileDropdown 
                            items={navigationData.solutionsItems}
                            isOpen={solutionsOpen}
                            ariaLabel="Solutions submenu"
                        />

                        <DesktopDropdown 
                            items={navigationData.solutionsDesktopItems}
                            isOpen={solutionsOpen}
                            gridCols="grid-cols-3"
                            dropdownType="solutions"
                        />
                    </li>

                    {/* RESOURCES */}
                    <li 
                        className="relative group dropdown-container" 
                        role="none"
                        onMouseEnter={() => handleDesktopMouseEnter('resources')}
                        onMouseLeave={() => handleDesktopMouseLeave('resources')}
                    >
                        <button 
                            onClick={toggleResources} 
                            type="button" 
                            className={`relative hover:text-[#386861] flex items-center gap-2 font-bold ${getResponsiveStyles.textSize} focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded-xl px-3 py-2 rounded-xl transition-all duration-300 hover:bg-[#386861]/5 active:scale-95 group ${
                                resourcesOpen ? 'text-[#386861] bg-[#386861]/5' : ''
                            }`}
                            aria-expanded={resourcesOpen}
                            aria-haspopup="true"
                            role="menuitem"
                            aria-controls="resources-menu"
                            title="Click to toggle or hover to open"
                        >
                            Resources 
                            <FaChevronDown 
                                size={12} 
                                className={`transition-all duration-300 ${
                                    resourcesOpen ? 'rotate-180 text-[#386861]' : 'rotate-0'
                                }`} 
                            />
                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#386861] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </button>
                        
                        <MobileDropdown 
                            items={navigationData.resourcesItems}
                            isOpen={resourcesOpen}
                            ariaLabel="Resources submenu"
                        />

                        <ResourcesDesktopDropdown 
                            items={navigationData.resourcesItems}
                            isOpen={resourcesOpen}
                            dropdownType="resources"
                        />
                    </li>

                    <li role="none">
                        <Link 
                            href="/Contact"
                            className={`relative hover:text-[#386861] font-bold ${getResponsiveStyles.textSize} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#386861] focus:rounded-xl px-3 py-2 rounded-xl hover:bg-[#386861]/5 active:scale-95 group`}
                            role="menuitem"
                        >
                            Contact
                            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#386861] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                    </li>

                    {/* Mobile Contact Info */}
                    <li className="flex flex-col gap-4 mt-6 md:hidden text-base text-gray-700 p-6 bg-gradient-to-br from-[#386861]/5 to-[#F7D270]/5 rounded-2xl border border-gray-100" role="none">
                        <h3 className="font-bold text-[#386861] text-lg mb-2">Get in Touch</h3>
                        <a 
                            href="mailto:example@gmail.com" 
                            className="hover:text-[#386861] transition-all duration-300 flex items-center gap-2 p-2 rounded-xl hover:bg-white/50 active:scale-95"
                        >
                            <span className="text-lg">📧</span>
                            example@gmail.com
                        </a>
                        <a 
                            href="tel:+3929299453" 
                            className="hover:text-[#386861] transition-all duration-300 flex items-center gap-2 p-2 rounded-xl hover:bg-white/50 active:scale-95"
                        >
                            <span className="text-lg">📞</span>
                            +3929 299 453
                        </a>
                        <div className="pt-4 border-t border-gray-200">
                            <h4 className="font-semibold text-[#386861] mb-3">Follow Us</h4>
                            <div className="flex gap-3 text-[#386861]" role="list" aria-label="Social media links">
                                {navigationData.socialMedia.map((social, i) => (
                                    <a 
                                        key={`${social.label}-${i}`}
                                        href={social.href}
                                        aria-label={`Visit our ${social.label} page`}
                                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-[#386861] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        role="listitem"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </li>
                </ul>

                {screenSize.showGetStarted && (
                    <Link 
                        href="/Contact"
                        className={`
                            hidden md:block bg-gradient-to-r from-[#386861] to-[#294944] text-white py-3 px-8 font-bold rounded-2xl
                            transition-all duration-500 hover:from-[#294944] hover:to-[#1f3632] mt-4 md:mt-0 w-full md:w-auto
                            ${getResponsiveStyles.textSize} relative overflow-hidden group hover:shadow-2xl hover:shadow-[#294944]/50
                            transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100
                            focus:outline-none focus:ring-2 focus:ring-[#386861] focus:ring-offset-2 focus:ring-offset-white
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#F7D270]/20 before:to-transparent 
                            before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                        `}
                        aria-label="Get started with our services"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started Now 
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                ↗
                            </span>
                        </span>
                        <div className="absolute inset-0 opacity-0 bg-white/10 rounded-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/20 group-hover:w-64 group-hover:h-64 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                    </Link>
                )}
            </nav>

            {/* Overlay for mobile menu */}
            <div 
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden transition-all duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={toggleMenu}
                aria-hidden="true"
            />
        </>
    );
};

export default LowNav;