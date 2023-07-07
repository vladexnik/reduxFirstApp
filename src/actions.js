
export const inc=()=>{
    return {
      type:'inc'
    }
  }
  
export const dec=() => ({type: 'dec'})

export const rnd=(value) =>({type:'rnd', payload: value})
