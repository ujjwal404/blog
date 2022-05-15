import Date from '../components/date';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	allPostsData: Post[];
};

const Home = ({ allPostsData }: Props) => {
	return (
		<div className="flex flex-col max-w-6xl mx-auto divide-y dark:divide-border divide-graylight">
			{allPostsData.map((post,idx) => (
				<div key={idx} className='m-2 h-36 relative'>
					<Link href={`/posts/${post.slug}`}>
							<a>
									<div className="flex w-full flex-row justify-between absolute top-4">
										<div className=''>
											<div className='w-full'>
													<div className='text-xl md:text-3xl'>
															{post.title}
													</div>
													<div className="flex flex-col text-graylight text-xs md:text-md ">
														<p><Date dateString={post.date} /></p>
													</div>
											</div>
										</div>
										<div className='h-[125px] w-[150px] md:w-[250px] overflow-hidden'>
													<Image src={`/${post.coverImage}`} height={180} width={320} alt="coverImage" className='overflow-hidden'/>
										</div>
									</div>
							</a>		
					</Link>
				</div>
			))}
		</div>
	);
};

export default Home;
export async function getStaticProps() {
	const allPostsData = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content','coverImage']);
	return {
		props: {
			allPostsData
		}
	};
}
