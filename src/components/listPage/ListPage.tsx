import { listItems } from "../../store/allData";
import Card from "./Card";

const ListPage:React.FC = () => {


    return (
        <div className="h-full w-full text-center">
        <h1 className="text-4xl font-black mx-auto mt-5">جنسای بنجول حسین فرخی</h1>
        <div className="flex  flex-wrap items-center justify-center mx-auto gap-9 lg:w-10/12  my-16">

        {
            listItems.map((item, index) => {
               return <Card key={item.name + index} item={item} index={index + 1} />
            })
        }

        </div>
        </div>
    );
}



export default ListPage;