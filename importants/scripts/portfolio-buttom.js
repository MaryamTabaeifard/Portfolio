 //let list = document.querySelectorAll('.portfolio .list');
 //debugger
/// console.log(list);
 
// let item = document.querySelectorAll('.box');
 

const productList=[
  {
    title:'More Details',
    imgUrl:'assets/images/stock/strawberry.jpg',
    link:'#',
    category:'BERRY'
  },
  {
    title:'More Details',
    imgUrl:'assets/images/stock/cabbage.jpg',
    link:'#',
    category:'VEGETABLE'
  },
  {
    title:'More Details',
    imgUrl:'assets/images/stock/orange.jpg',
    link:'#',
    category:'CITRUS'
  },
  {
    title:'More Details',
    imgUrl:'assets/images/stock/lemon.jpg',
    link:'#',
    category:'CITRUS'
  },
  {
    title:'More Details',
    imgUrl:'assets/images/stock/blackberry.jpg',
    link:'#',
    category:'BERRY'
  },
  {
    title:'More Details',
    imgUrl:'assets/images/stock/blueberry.jpg',
    link:'#',
    category:'BERRY'
  },
  {
    title:'More Details',
    imgUrl:'assets/images/stock/tomato.jpg',
    link:'#',
    category:'VEGETABLE'
  },
  {
    title:'More Details',
    imgUrl:'assets/images/stock/raspberry.jpg',
    link:'#',
    category:'BERRY'
  },

]

 function createParoductItem(imgUrl,link,title,category){
 
  return `
      <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-category="${category}">
        <div class="portfolio-wrap box" data-item="berry">
          <img src="${imgUrl}" class="img4-fluid" alt="${title}">
          <div class="portfolio-links row1">
            <a href="${imgUrl}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}"><i class="bx bx1 bx-plus"></i></a>
            <a href="${link}" title="${title}"><i class="bx bx1 bx-link"></i></a>
          </div>
        </div>
      </div>
`
 }

 function createProductCategory(categoryName){
  const _catItems=productList.filter(p=>p.category===categoryName || categoryName==='*');
  let _wrp='';
  for(let i=0;i<_catItems.length;i++){
    _wrp+=createParoductItem(
      _catItems[i]?.imgUrl,
      _catItems[i]?.link,
      _catItems[i]?.title,
      _catItems[i]?.category)
  }

  const _target=document.getElementById('products');
  _target.innerHTML=_wrp;
  }



  function customizeProductList(categoryName){
    const _productElents=document.querySelectorAll("[data-category="+categoryName+"]")
    const _allProductElents=document.querySelectorAll("[data-category]");

    _allProductElents.forEach(_catItem => 
      {
        _catItem.classList.add("hide");
      _catItem.classList.remove("active");
    });

    _productElents.forEach(_catItem => 
      {
        _catItem.classList.add("active");
      _catItem.classList.remove("hide");
    });
  }


  /*@info load all products*/
  createProductCategory('*');

