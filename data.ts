const cardData = [
    {
        id: 1,
        title: "The Future of Technology: Innovations and Trends",
        description: "Explore the latest trends and innovations in technology.",
        imageUrl: "https://example.com/images/technology.png",
        link: "https://example.com/articles/future-of-technology",
        details: "Technology is evolving at a rapid pace, with new advancements being made every day. | This article covers the latest trends in technology, including artificial intelligence, blockchain, and quantum computing. | You will learn about the potential impact of these technologies on various industries and how they are shaping the future. | The article also discusses the challenges and opportunities that come with these advancements.",
        author: "John Doe",
        views: 1500,
        date: "Oct 12, 2021"
    },
    {
        id: 2,
        title: "Healthy Lifestyle Tips: How to Stay Fit and Well",
        description: "Learn how to maintain a healthy lifestyle with these tips.",
        imageUrl: "https://example.com/images/lifestyle.png",
        link: "https://example.com/articles/healthy-lifestyle-tips",
        details: "Maintaining a healthy lifestyle is essential for overall well-being. | This article provides tips on how to stay healthy, including diet, exercise, and mental health. | You will learn about the importance of a balanced diet, regular physical activity, and stress management. | The article also includes practical advice on how to incorporate healthy habits into your daily routine.",
        author: "Jane Smith",
        views: 1200,
        date: "Oct 13, 2021"
    },
    {
        id: 3,
        title: "Innovative Education Techniques: Modern Learning Methods",
        description: "Discover innovative techniques for modern education.",
        imageUrl: "https://example.com/images/education.png",
        link: "https://example.com/articles/innovative-education-techniques",
        details: "Education is constantly evolving, with new techniques being developed to enhance learning. | This article covers innovative education techniques, including online learning, gamification, and personalized learning. | You will learn about the benefits of these techniques and how they can improve student engagement and outcomes. | The article also discusses the challenges and opportunities in implementing these techniques in different educational settings.",
        author: "Alice Johnson",
        views: 1800,
        date: "Oct 14, 2021"
    },
    {
        id: 4,
        title: "Health and Wellness: A Comprehensive Guide",
        description: "Explore the importance of health and wellness in daily life.",
        imageUrl: "https://example.com/images/health.png",
        link: "https://example.com/articles/health-and-wellness",
        details: "Health and wellness are crucial for a fulfilling life. | This article covers various aspects of health and wellness, including physical, mental, and emotional well-being. | You will learn about the importance of regular check-ups, healthy eating, and stress management. | The article also provides tips on how to maintain a balanced lifestyle and improve your overall health.",
        author: "Bob Brown",
        views: 1100,
        date: "Oct 15, 2021"
    },
    {
        id: 5,
        title: "Financial Planning for the Future: Secure Your Finances",
        description: "Learn how to plan your finances for a secure future.",
        imageUrl: "https://example.com/images/finance.png",
        link: "https://example.com/articles/financial-planning",
        details: "Financial planning is essential for a secure future. | This article provides tips on how to manage your finances, including budgeting, saving, and investing. | You will learn about the importance of setting financial goals and creating a plan to achieve them. | The article also discusses different investment options and how to choose the right one for your needs.",
        author: "Charlie Davis",
        views: 1400,
        date: "Oct 16, 2021"
    },
    {
        id: 6,
        title: "Top Travel Destinations: Explore the World",
        description: "Discover the top travel destinations around the world.",
        imageUrl: "https://example.com/images/travel.png",
        link: "https://example.com/articles/top-travel-destinations",
        details: "Traveling is a great way to explore new cultures and experiences. | This article covers the top travel destinations around the world, including popular tourist spots and hidden gems. | You will learn about the best times to visit, must-see attractions, and travel tips for each destination. | The article also includes recommendations for accommodations, dining, and activities.",
        author: "Diana Evans",
        views: 1300,
        date: "Oct 17, 2021"
    },
    {
        id: 7,
        title: "Delicious Food Recipes: Tasty Meals for Every Occasion",
        description: "Try these delicious food recipes for your next meal.",
        imageUrl: "https://example.com/images/food.png",
        link: "https://example.com/articles/delicious-food-recipes",
        details: "Cooking can be a fun and rewarding experience. | This article provides a collection of delicious food recipes for you to try. | You will find recipes for breakfast, lunch, dinner, and desserts, with step-by-step instructions and tips. | The article also includes information on the nutritional value of each recipe and suggestions for ingredient substitutions.",
        author: "Evan Foster",
        views: 1600,
        date: "Oct 18, 2021"
    }
];

const categories = [
    "All",
    "Food",
    "Travel",
    "Finance",
    "Health",
    "Education",
    "Lifestyle",
    "Technology"
];

export default cardData;
export const allCategories= categories
export const recommendedCardData = cardData.filter(card => card.id <= 4);