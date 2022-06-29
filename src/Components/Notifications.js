const { notification } = require("antd");
const { exportFromJSON } = require("export-from-json");

exports.successNotificationWithIcon = (type, message) => {
    notification[type]({
        message: message,
        description:
            'Thanks for being with us',
    });
};

exports.downloadExcel = () => {
    console.log("click");
    const data = [{ foo: 'foo' }, { bar: 'bar' }]
    const fileName = 'download'
    const exportType = exportFromJSON.types.csv
    exportFromJSON({ data, fileName, exportType })
}
