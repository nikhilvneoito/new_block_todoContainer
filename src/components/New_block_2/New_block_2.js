import React from 'react'
import { useFederatedComponent } from '@appblocks/js-sdk'

const New_block_2 = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_new_block_2}/remoteEntry.js`,
    scope: 'new_block_2',
    module: './new_block_2',
  }

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  )

  // console.log(FederatedComponent);
  return (
    <React.Suspense fallback={''}>
      {errorLoading ? `Error loading module "${module}"` : FederatedComponent && <FederatedComponent {...props} />}
    </React.Suspense>
  )
}

export default New_block_2
