// blogData.ts
export interface BlogContentType {
    _id: string;
    title: string;
    content: string;
    author: string;
    authorUrl: string;
    imageUrl?: string; // Assuming imageUrl might be optional
}

export const blogContents: BlogContentType[] = [
    {
        _id: '1',
        title: 'React:Why It the Coolest JavaScript Library for Beginners',
        content: "React has become one of the most popular JavaScript libraries for building user interfaces, and for a good reason. Whether you're a newbie just dipping your toes into the world of web development or a seasoned developer looking to explore something new, React offers a compelling toolkit that makes building interactive and dynamic web applications a breeze. In this blog post, we'll delve into what makes React so cool and why it's an excellent choice for beginners.React's component-based architecture and use of JSX make it easier for beginners to grasp the concepts and start building applications quickly. The syntax is straightforward, and you can see immediate results as you build and modify components.",
        author: "D'code AI",
        authorUrl: '/dcode_logo.svg',
        imageUrl: 'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits.jpg'
    },
    {
        _id: '2',
        title: "Next.js:The Ultimate Framework for React Developers",
        content: "If you're a React developer or even just a beginner looking to expand your skills, you've likely heard of Next.js. Next.js is a powerful React framework that simplifies building web applications by offering robust features like server-side rendering, static site generation, and API routes out of the box. In this blog post, we'll explore what makes Next.js so exciting and why it's a must-learn tool for any React developer.Next.js is an open-source React framework created by Vercel (formerly Zeit). It builds on top of React to provide a comprehensive solution for building modern web applications. By combining the best parts of React with powerful additional features, Next.js makes it easier to create fast, scalable, and SEO-friendly web applications.",
        author: "D'code AI",
        authorUrl: '/dcode_logo.svg',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png'
    },
    
    // Add more blog objects as needed
];
