import { postApi } from '../../services/posts/PostsService.ts';

const MainPage = () => {
  const { data: posts, isLoading } = postApi.useGetPostsQuery({ limit: 10, page: 1 })
  return (
    <div>
      {!isLoading ? <div>
        {posts!.data.map(post => <div>{post.title}</div>)}
      </div> : <></>
      }
    </div>
  );
};

export default MainPage;