import BoredComponent from '@/component/BoredComponent'


async function getThingsToDo() {
  const timestamp = new Date().getTime();  
  const url = `https://www.boredapi.com/api/activity?timestamp=${timestamp}`;
  const data = await fetch(url);
  return data.json();
}


export default async function Home() {
  const todos = await getThingsToDo()
  return (
    <div>
      <BoredComponent todos = {todos} />
    </div>
  )
}
