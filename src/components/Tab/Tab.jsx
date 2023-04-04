import { Tabs } from '@mantine/core';
import Update_Products from '../../containers/Update_Products/Update_Products';

const Tab = () => {
    return (
        <Tabs variant="outline" className='my-10' styles={{
            tab: {
                '&[data-active]': {
                    fontWeight: 'bold',
                }
            }
        }} defaultValue="first">
            <Tabs.List position="center">
                <Tabs.Tab value="first">Top Rated</Tabs.Tab>
                <Tabs.Tab value="second">Best Selling</Tabs.Tab>
                <Tabs.Tab value="third">Latest Product</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="first" pt="xs" >
                <Update_Products product_ref='Top Rated' />
            </Tabs.Panel>

            <Tabs.Panel value="second" pt="xs">
                <Update_Products product_ref='Best Selling' />
            </Tabs.Panel>

            <Tabs.Panel value="third" pt="xs">
                <Update_Products product_ref='Latest Product' />
            </Tabs.Panel>
        </Tabs>
    );
}

export default Tab