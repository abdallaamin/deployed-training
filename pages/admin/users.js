import React from 'react'
import Layout from './Layout'
import BasicTabs from '../../components/userscomponents/UserTabs.jsx'
import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.', {
//   duration: 4000,
//   position: 'bottom-center',

//   // Styling
//   style: {},
//   className: '',

//   // Custom Icon
//   icon: '👏',

//   // Change colors of success/error/loading icon
//   iconTheme: {
//     primary: '#000',
//     secondary: '#fff',
//   },

//   // Aria
//   ariaProps: {
//     role: 'status',
//     'aria-live': 'polite',
//   },
// });;
      // <button onClick={notify}>Make me a toast</button>
      // <Toaster />

const index = () => {
  return (
    <Layout>

      <div style={{ width: "auto", flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', paddingTop: '35px' }}>
        <BasicTabs />
      </div>
    </Layout>
  )
}

export default index