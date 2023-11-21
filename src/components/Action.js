const Action = () => {
    return (
        <div className='bg-world relative bg-fixed h-[50vh] bg-no-repeat bg-center bg-cover overflow-clip'>
            <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00000082] h-full w-full'>
                <section className=' relative w-[80%] 800px:w-[65%] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white '>
                    <h1 className="text-[30px] font-bold mb-1 ">Call To Action</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='w-[220px] group cursor-pointer relative text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16  py-3  text-white bg-transparent border-2 hover:border-primaryColor hover:bg-primaryColor rounded-md' style={{ transition: "0.5s" }}>
                        <a href="#Home" className='text-[18px] '>Call To Action</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Action