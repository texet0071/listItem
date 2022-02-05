import Main from "@/pages/Main";
import {createRouter, createWebHashHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostdPage from "@/pages/PostdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "../pages/PostPageCompositionApi";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default  router