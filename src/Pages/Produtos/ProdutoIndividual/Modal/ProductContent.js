import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { PRODUCT_GET } from '../../../../api';
import Error from '../../../../Components/Helper/Error';
import useFetch from '../../../../Hooks/useFetch';

import {
  Container,
  Img,
  Main,
  Button,
  TopSection,
  SubMenu,
  ProductDescription,
  Pdescription,
} from './styles';

const ProductContent = ({ product }) => {
  const { data, request, error } = useFetch();
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getProduct() {
      const { url, options } = await PRODUCT_GET(`${id}`);
      request(url, options);
    }

    getProduct();
  }, [request, id]);
  function handleBackPage() {
    history.goBack();
  }

  if (error) return <Error error={error} />;
  if (data) {
    return (
      <>
        <Main>
          <TopSection>
            <SubMenu>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19 12H5'
                  stroke='black'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12 19L5 12L12 5'
                  stroke='black'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>

              <Link onClick={handleBackPage}>VOLTAR</Link>
            </SubMenu>
          </TopSection>
          <Container>
            <Img src={data.product.src} alt='' />
            {/* <div>
              
            </div> */}
            <ProductDescription>
              <div className='title-product'>
                <h1>{data.product.title}</h1>
                <p>cód. {data.product.codigo}</p>
              </div>
              <Pdescription> {data.product.descricao}</Pdescription>
              <Button>Tenho interesse</Button>
            </ProductDescription>
          </Container>
        </Main>
      </>
    );
  } else return null;
};

export default ProductContent;
