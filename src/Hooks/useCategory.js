import React from 'react'

const useCategory = ({ page, setModalProduct, setInfinite, categoria }) => {
    const { data, error, request } = useFetch();
    useEffect(() => {
      async function fetchProduct() {
        const total = 6;  
        const { url, options } = PRODUCTS_GET({
          page,
          total,
          categoria: 'feminino',
        });
        const { response, json } = await request(url, options);  
        if (response && response.ok && json.length < total) setInfinite(false);
      }
      fetchProduct();
    }, [request, page, categoria, setInfinite]);
    // if (data) {
    //   const cate = data.map((product) => {
    //     return product;
    //   });
  
    //   const masc = cate.filter((obj) => {
    //     return obj.categoria === 'Masculino';
    //   });
    //   console.log(masc);
    // }
  
    if (error) return <Error error={error} />;
    if (data) {
      console.log(data);
      return ();

export default useCategory;
