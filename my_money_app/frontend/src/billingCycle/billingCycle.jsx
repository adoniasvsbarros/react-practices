import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'


class BillingCycle extends React.Component{
    render(){
        return(
            <div>
                <ContentHeader title='Billing Cycles' small='Registry' />
                <Content>
                    <Tabs>
                        <TabsHeader>

                        </TabsHeader>
                        <TabsContent>
                            
                        </TabsContent>

                    </Tabs>
                </Content>
            </div>
        )
    }
} 

export default BillingCycle;