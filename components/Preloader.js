
export default function Preloader(){
    return (
        <>
            <div className="preloadercontainer d-flex align-items-center justify-content-center flex-column">
                <img src="/logo.png" alt="logo" />
                <div className="loader"></div>

            </div>

            <style jsx>{`
            .preloadercontainer{
                position:fixed;
                z-index:3000;
                width:100%;
                height:100%;
                background-color:black;
            }
            .loader {
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #c79b30; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
            `}</style>
        </>
    )
}