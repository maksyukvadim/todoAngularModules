
export default function filterListItem(LocalDataService) {
   return (items) => {
     var filter = LocalDataService.filter;
     var list = [];
     if (filter == 'All') {
       return items;
     } else if (filter == 'Completed') {
       for (var i = 0; i < items.length; i++) {
         if (items[i].done) {
           list.push(items[i]);
         }
       }
     } else {
       for (var i = 0; i < items.length; i++) {
         if (!items[i].done) {
           list.push(items[i]);
         }
       }
     }
     return list;
   }
}
