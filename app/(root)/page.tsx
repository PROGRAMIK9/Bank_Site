import React from 'react'
import HeaderArea from '@/components/HeaderArea'
import TotalBalanceBox from '@/components/BalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.action';
const page = async() => {
  const loggedUser = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderArea 
            type="greeting"
            title = "Welcome"
            user ={loggedUser?.name || 'Guest'}
            subtext = "Access and manage your bank account with ease."
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks ={1}
          totalCurrentBalance={1000} />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user ={loggedUser}
        transactions ={[]}
        banks ={[{},{}]}/>
    </section>
  )
}

export default page
