# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

✓ হোম পেজে Get Blogs এ রিকোয়েস্ট করে আপনাকে ব্লগ নিয়ে এসে দেখাতে হবে। এখানে API থেকে ১০ টি করে ব্লগ আসবে, আপনাকে Infinite Scroll ইমপ্লিমেন্ট করে স্ক্রল এর সাথে Sync রেখে ব্লগ নিয়ে এসে দেখাতে হবে ।

✓ হোম পেজে Infinite Scroll করে যখন একদম শেষ পর্যায়ে চলে আসবে, অর্থাৎ যখন সার্ভারে আর কোনো ব্লগ থাকবে না তখন সুন্দর করে একটি মেসেজ দিতে হবে যেন ইউজার বুঝতে পারে, সব ব্লগ চলে এসেছে, সার্ভারে আর কোনো ব্লগ নেই ।

**✓ হোম পেজ থেকে ব্লগের কার্ডের যে কোনো জায়গায় ক্লিক করলে, Blog Details পেজে নিয়ে যাবে । তবে কার্ডের 3 Dots এ ক্লিক করলে Edit & Delete অপশন দেখাবে, এবং Author এর নামে ক্লিক করলে, Author এর প্রোফাইল পেজে নিয়ে যাবে ।**

**✓ হোম পেজে যেই ব্লগ গুলো API থেকে আসছে, এর মধ্যে যেই ব্লগ গুলো Logged In User নিজেই পোষ্ট করেছে, সেই ব্লগ গুলোর কার্ড এ 3 Dots দেখাবে । যেন সেই ডট গুলো তে ক্লিক করে ব্লগ Edit এবং Delete করা যায় । তবে ব্লগ শুধু Author-ই Edit এবং Delete করতে পারবে ।**

**✓ পুরো প্রজেক্টের যেখানেই Author এর নাম লিখা থাকবে, সেখানে নাম এ ক্লিক করলে Author এর প্রোফাইলে চলে যাবে এবং Author এর প্রোফাইলে তার Information এবং সে কি কি পোষ্ট করেছে সেগুলো দেখাবে ।**

**✓ হোম পেজে Most Popular সেকশনে Get Popular থেকে থেকে ডেটা নিয়ে এসে দেখাতে হবে এবং এখানেও ব্লগ গুলোতে ক্লিক করলে ব্লগ ডিটেইলস এ নিয়ে যেতে হবে।**

**✓ Your Favourites সেকশন এ Logged ইন ইউজার এর ব্লগ গুলো নিয়ে আসতে হবে । ভিন্ন State এর কারণে যেন অনাকাঙ্ক্ষিত Error throw না করে সেদিকে খেয়াল রাখতে হবে ।**

**✓ ব্লগ ডিটেইলস পেজে Get Single Blog থেকে ডেটা নিয়ে এসে দেখাতে হবে । সেখানে টেমপ্লেটে দেয়া তথ্য গুলো ঠিক ঠাক ভাবে বসাতে হবে । ব্লগের কন্টেন্ট দেখানোর জন্যে dangerouslySetInnerHTML ব্যবহার করতে পারেন। এটি সম্পর্কে না জেনে থাকলে এই ব্লগ টি পড়তে পারেন - When to use dangerouslySetInnerHTML in React? । তবে dangerouslySetInnerHTML ব্যবহার করা বাধ্যতামূলক নয়।**

✓ ব্লগ ডিটেইলস পেজে Floating অবস্থায় Like, Favourite এবং Comment বাটন রয়েছে। লাইকে ক্লিক করলে লাইক হবে, Favourite এ ক্লিক করলে Favourite লিস্ট JSON এ যাবে এবং Comment এ ক্লিক করলে Comment সেকশন নিয়ে যাবে । তবে, ইউজার যদি লগড ইন না থাকে, তাহলে ইউজার যখন Like বা Favourite করার চেষ্টা করবে, তখন সুন্দর করে বাধা দিতে হবে । Like/Unlike করার জন্যে Like এবং Favourite/Unfavourite করার জন্যে Favourite এই API কল করতে হবে ।

✓ ব্লগ ডিটেইলস পেজের Comment সেকশনে Comment নিয়ে এসে দেখাতে হবে । এক্ষেত্রে পুর্বের 'Get Single Blog' এর রেসপন্স এই Comment গুলো থাকবে । তবে, লগইন না থাকা অবস্থায় Comment দেখা যাবে কিন্তু Comment করা যাবে না।

✓ Logged in ইউজার চাইলে নিজের Comment ডিলিট করতে পারবে । Comment ডিলিটের জন্যে টেমপ্লেটে আমরা কোনো কোড দেইনি। তাই সেটি আপনাকে নিজেই করতে হবে এবং Comment ডিলিট এর জন্যে API ডকুমেন্টেশন দেয়া হয়েছে, সে অনুযায়ী আপনাকে Implement করতে হবে ।

✓ নেভিগেশন বার এ Write নামে একটি বাটন রয়েছে, সেটি তে ক্লিক করলে Create Blog এ নিয়ে যাবে । তবে এই পেজ টি Private Route এর মধ্যে হবে। অর্থাৎ ইউজার লগইন না থাকা অবস্থায় এই পেজে যাওয়ার চেষ্টা করলে তাকে লগইন পেজে নিয়ে যাবে।

✓ Create Blog পেজের সব কিছুই Required Field অর্থাৎ ব্লগের জন্যে যা যা প্রয়োজন সব কিছু দিয়ে আপনাকে সাবমিট করতে হবে । কোনো কিছু এড না করে সাবমিট করার চেষ্টা করলে Error দেখাতে হবে । সাবমিট করার পরে, নতুন ব্লগ টির Details পেজে নিয়ে যেতে হবে । নতুন ব্লগ তৈরি করতে Create New Blog এই API কল করতে হবে ।

✓ Logged In User তার Avatar এবং Bio পরিবর্তন করতে পারবে । প্রথম অবস্থায় রেজিস্টার করার পরে ইউজার এর কোন Avatar থাকবে না । ইউজার প্রোফাইল পেজে গিয়ে তার Avatar পরিবর্তন করতে পারবে । তবে Avater আপলোড করার আগে পর্যন্ত, Default ভাবে ওই ইউজারে এর নামের First Letter দিয়ে, যেভাবে Template এ Dummy Avatar বানিয়ে দেয়া আছে, সেভাবে করতে হবে।

✓ Profile Page এ সেই ইউজার এর সকল পোষ্ট গুলো দেখাতে হবে (যেভাবে টেম্পলেট এ দেখানো হয়েছে) । এখানেও আপনি চাইলে ইনফিনিটি স্ক্রল ইমপ্লিমেন্ট করতে পারেন।

✓ Login এবং Registration এর জন্যে টেমপ্লেট এবং API দিয়ে দেয়া হয়েছে । API ব্যবহার করে Authentication ম্যানেজ করতে হবে । Login এবং Registration সম্পন্ন হলে আমরা একটি Access Token এবং একটি Refresh Token দিয়ে দিবো । Access Token এর মেয়াদ ১ ঘণ্টা এবং Refresh Token এর মেয়াদ ১ দিন। Access Token Expire হলে Refresh Token দিয়ে নতুন Access Token বানিয়ে নিতে হবে এবং Refresh Token Expire হলে পুনরায় লগইন করতে হবে । ডকুমেন্টেশনের User Authentication Collection এ প্রয়োজনীয় API বানিয়ে দেয়া হয়েছে ।

Logged In অবস্থায় নেভিগেশন মেনুতে এগুলো দেখাবে - Write, Search, Logout, Loggedin User Name and Profile Picture
Logged Out অবস্থায় নেভিগেশন মেনুতে এগুলো দেখাবে - Write, Login
✓ আপনাদের সার্চ Implement করতে হবে । সার্চের জন্যে API এবং Templete বানিয়ে দেয়া হয়েছে । Navbar থেকে সার্চ আইকন এ ক্লিক করলে সার্চ এর মোডাল ওপেন হবে । এখানে Search Modal এর জন্যে usePortal হুক ব্যবহার করতে হবে।
