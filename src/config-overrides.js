const {override,fixBableImports,addLessLoader} = request('customaize-cra');

module.exports = override(
    //针对antd按需打包
    fixBableImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true,
    }),
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:{'@primary-color':'#1DA57A'},

    }),
);