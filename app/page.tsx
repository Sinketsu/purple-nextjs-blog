import Card from "@/components/Card/Card";
import blogImage from '@/public/blog.png'

export default function Home() {
  return (
    <Card
      title="Как работать с CSS Grid"
      image={blogImage}
      imageAlt="Изображение блога"
      text="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
      duration="3 минуты"
      tags={['Front-end', '1 месяц назад']}
      likes={4}
    />
  );
}
