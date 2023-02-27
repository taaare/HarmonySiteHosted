const createCourse = require('../../public/scripts/coursecreate').default

// some values altered for temp testing

test('properly saves values to object', () => {
    expect(createCourse("BIO 999", "John John", "TTH", "09/12/12", "10/12/12", "10:00", "11:30").courseName).toEqual("BIO 999")
    expect(createCourse("BIO 999", "John John", "TTH", "09/12/12", "10/12/12", "10:00", "11:30").instructorName).toEqual("John John")
    expect(createCourse("BIO 999", "John John", "TTH", "09/12/12", "10/12/12", "10:00", "11:30").scheduledDays).toEqual("TTH")
    expect(createCourse("BIO 999", "John John", "TTH", "09/12/12", "10/12/12", "10:00", "11:30").startDate).toEqual("09/12/12")
    expect(createCourse("BIO 999", "John John", "TTH", "09/12/12", "10/12/12", "10:00", "11:30").endDate).toEqual("10/12/12")
    expect(createCourse("BIO 999", "John John", "TTH", "09/12/12", "10/12/12", "10:00", "11:30").startTime).toEqual("10:00")
    expect(createCourse("BIO 999", "John John", "TTH", "09/12/12", "10/12/12", "10:00", "11:30").endTime).toEqual("11:30")

})

test('properly saves values to object with blank string', () => {
    expect(createCourse("CSE 773", "Mr. Teacher", "TTH", "07/18/12", "10/12/12", "", "1").courseName).toEqual("CSE 773")
    expect(createCourse("CSE 773", "Mr. Teacher", "TTH", "07/18/12", "10/12/12", "", "1").instructorName).toEqual("Mr. Teacher")
    expect(createCourse("CSE 773", "Mr. Teacher", "TTH", "07/18/12", "10/12/12", "", "1").scheduledDays).toEqual("TTH")
    expect(createCourse("CSE 773", "Mr. Teacher", "TTH", "07/18/12", "10/12/12", "", "1").startDate).toEqual("07/18/12")
    expect(createCourse("CSE 773", "Mr. Teacher", "TTH", "07/18/12", "10/12/12", "", "1").endDate).toEqual("10/12/12")
    expect(createCourse("CSE 773", "Mr. Teacher", "TTH", "07/18/12", "10/12/12", "", "1").startTime).toEqual("")
    expect(createCourse("CSE 773", "Mr. Teacher", "TTH", "07/18/12", "10/12/12", "", "1").endTime).toEqual("1")

})

