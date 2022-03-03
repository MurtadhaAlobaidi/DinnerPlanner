function promiseNoData(promise, data, error){
    return !promise && <span>no data</span>
	|| error && <h1>{error}</h1>
	|| !data && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>
}