import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
  const [params,setParams] = useSearchParams();
  const category = params.get('category')
    return (
      <Container>
          <div className="flex items-center pt-2 overflow-x-auto justify-between">
            {categories.map(item=><CategoryBox key={item.label} label={item.label} icon={item.icon} selected={category===item.label}></CategoryBox>)}
        </div>
      </Container>
    );
};

export default Categories;