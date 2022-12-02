import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { saveAs } from 'file-saver';

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
  let { id } = useParams();
  const { data } = useSelector((state) => state.product);

  const filterProductId = data.filter((item) => item.id === id);

  const history = useHistory();

  function handleBackPage() {
    history.goBack();
  }

  async function handleDownload(url) {
    saveAs(url, 'download');
  }

  if (filterProductId) {
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
            <Img src={filterProductId[0].urls.regular} alt='' />

            <ProductDescription>
              <div className='title-product'>
                <h1>{filterProductId[0].description}</h1>
                {/* <p>cód. {data.product.codigo}</p> */}
              </div>
              <Pdescription>
                Fotógrafo: {filterProductId[0].user.bio}
              </Pdescription>
              <Button
                onClick={(e) =>
                  handleDownload(filterProductId[0].links.download)
                }
              >
                Download
              </Button>
            </ProductDescription>
          </Container>
        </Main>
      </>
    );
  } else return null;
};

export default ProductContent;
