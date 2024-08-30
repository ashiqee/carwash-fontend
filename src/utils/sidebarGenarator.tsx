import { TSidebarItem, TUserPath } from '@/interface/interface';

import { NavLink } from 'react-router-dom';

const SidebarGenarator = (items:TUserPath[],role:string) => {
  const sidebarItems = items.reduce((acc:TSidebarItem[],item)=>{
if(item.path && item.name){
  acc.push({
    key:item.name,
    label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
  })
}

if(item.children){
  acc.push({
    key:`${item.name}+1`,
    label: item.name,
    children:item.children.map((child)=>{
      if(child.name){
        return{
          key: child.name,
          label:(
            <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
          )
        }
      }
    })
  })
}

return acc;
  },[])
 return sidebarItems
 
};

export default SidebarGenarator;