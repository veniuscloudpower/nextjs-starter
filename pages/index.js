import Head from 'next/head'

export default function Home() {
  return (
      <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="content-wrapper">

          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Home</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>


                  </ol>
                </div>
              </div>
            </div>
          </section>


          <section className="content">

            <div className="card card-outline card-primary">
              <div className="card-header">

                <h3 className="card-title" > Home </h3>

                <div className="card-tools">


                  <ul className="pagination pagination-sm">


                  </ul>

                </div>
              </div>
              <div className="card-body">
                <div className="row d-flex align-items-stretch">


                </div>


              </div>

              <div className="card-footer">

              </div>
            </div>


          </section>
        </div>
    </>
  )
}
