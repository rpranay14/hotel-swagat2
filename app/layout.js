import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./Components/NavbarComponent";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hotel Swagat | Mount Abu, Rajasthan",
  description: "Discover the best hotel experience in Mount Abu at Hotel Swagat. Enjoy luxury accommodation with premium rooms and suites offering breathtaking views of the Aravalli Range. Our serene retreat ensures tranquility and relaxation during your vacation getaway. Indulge in delicious dining options at our restaurant and experience top-notch hospitality. Book now for the best rates and enjoy a memorable stay near Nakki Lake.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="robots" content="all" />
      <meta name="keywords" content="hotel mount abu, mount abu hotel booking, abu hotels, mount abu hotels price 500 to 1000, abu hotel booking, mount abu hotels near nakki lake, best hotel in mount abu,Mount Abu hotel, Hotel Swagat, luxury accommodation, comfort, hospitality, Aravalli Range views, serene retreat, tranquility, premium rooms, suites, dining, restaurant, amenities, relaxation, vacation, getaway, travel, experience, best rates, cheap,"></meta>
      <link rel="canonical" href="https://hotelswagat.co.in/" />
      <meta property="og:title" content="Hotel Swagat - Your Serene Retreat in Mount Abu, Rajasthan"/>
<meta property="og:description" content="Discover the best hotel experience in Mount Abu at Hotel Swagat. Enjoy luxury accommodation with premium rooms and suites offering breathtaking views of the Aravalli Range. Our serene retreat ensures tranquility and relaxation during your vacation getaway. Indulge in delicious dining options at our restaurant and experience top-notch hospitality. Book now for the best rates and enjoy a memorable stay near Nakki Lake."/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.hotelswagatmountabu.com"/>
<meta property="og:image" content="https://www.hotelswagatmountabu.com/og-image.jpg"/>
<meta property="og:site_name" content="Hotel Swagat, Mount Abu"/>
<meta property="og:keywords" content="hotel mount abu, mount abu hotel booking, abu hotels, mount abu hotels price 500 to 1000, abu hotel booking, mount abu hotels near nakki lake, best hotel in mount abu, Mount Abu hotel, Hotel Swagat, luxury accommodation, comfort, hospitality, Aravalli Range views, serene retreat, tranquility, premium rooms, suites, dining, restaurant, amenities, relaxation, vacation, getaway, travel, experience, best rates, cheap"></meta>
      </head>
      <body className={inter.className}>
        
       
        <NavbarComponent/>
        
        
        {children}
          
        </body>
    </html>
  );
}
