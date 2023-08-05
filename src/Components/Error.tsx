import React, { ReactElement } from 'react'

export const Error = (): ReactElement => {
  return (
    <div>
      <p>Not Found</p>
      <p>The requested URL was not found on this server.</p>
      <p>
        Additionally, a 404 Not Found error was encountered while trying to use
        an ErrorDocument to handle the request.
      </p>
    </div>
  )
}
