function ButtonContact () {
    return(
        <a
          href="https://calendly.com/mataceadm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" md:fixed flex justify-end w-full items-center mt-[120px] pr-[66px] md:mt-0 md:pr-0 md:bottom-14 md:right-48">
            <button className="
              w-[140px] h-[48px]
              md:w-[260px] md:h-[110px] 
              text-xl md:text-4xl
              bg-white text-gray-800 font-semibold
              hover:text-white
              hover:border-white hover:border-[1px]
              relative overflow-hidden
              group
              rounded-[55px]
              transition-all duration-700 ease-out
              transform origin-center
              hover:scale-[1.1]
            ">
              <span className="relative z-10">Contáctame</span>
              
              <span className="
                absolute 
                -bottom-28 left-1/2 
                -translate-x-1/2
                w-[260px] h-[260px] 
                bg-gray-800 
                rounded-full 
                scale-0 
                origin-bottom 
                transition-transform duration-700 ease-out 
                group-hover:scale-[1.1] /* Ajusta este valor según necesidad */
              "/>
            </button>
          </div>
        </a>
    )
}

export { ButtonContact }