import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends React.Component{
    render(){
        return(
            <div>
                <ContentHeader title='Billing Cycles' small='Registry' />
                <Content>
                    Billing Cycles 
                </Content>
            </div>
        )
    }
} 

export default BillingCycle;