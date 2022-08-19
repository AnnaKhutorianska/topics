const { useEffect, useState } = require("react");

export default function WithSubscription(WrappedComponent, selectData) {
  return function() {
   
    const [data, setData] = useState('')

    useEffect(() => {
      setData(selectData(DataSource, props))

      //compdidmount
      DataSource.addChangeListener(handleChange);
      //compwillunmount
      return () => {
        DataSource.removeChangeListener(handleChange);
      }
    },[])
    
  
    function handleChange() {
      setData(selectData(DataSource, props))
    }

      //відображується обгорнутий компонент зі свіжими даними!
      return <WrappedComponent data={data} {...this.props} />;
    }
};