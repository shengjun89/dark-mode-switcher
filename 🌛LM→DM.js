//切换深色插画
async function tokenKilikae(b,a){
	for(let i =0;i<selection().length;i++) {
		let nodes = await find([selection()[i]], n => true);
		nodes.forEach(n => {
			((n as GeometryMixin).fillStyleId === a)&&((n as GeometryMixin).fillStyleId = b);
			((n as GeometryMixin).strokeStyleId === a)&&((n as GeometryMixin).strokeStyleId = b);
		});
	};
}

//以下为token映射关系表
// const res = await fetch('https://fs3e9r.api.larkfn.com/get_style_keys');
// const data: {name: string, lm: string, dm: string}[] = await res.json();

let dmArr = [
  "S:0c4f551f884deaacc62f2cb7b1b883543edb6a1e,4968:88",
  "S:9b749b62d10fd3521b261b55739b860370102def,4968:110",
  "S:c903c43c6a0560d92dfa430c32816ad1b804c5da,4968:210",
  "S:246db16fc1adaf2dcec439a449d25807c73514ea,4968:118",
  "S:9f091c0a67a493c6e9cdb9d990c213b6d858ed66,4968:87",
  "S:06345641d3c1807a3df0933b90db04d06401e217,4968:161",
  "S:0c936527f0dcac48981b18c9963cc897bcb674a4,4968:86",
  "S:4783334013e5ab706beb6c302ed47757325f5c48,4968:85",
  "S:6e69e8724868b5b06d29219eae334fe6be3b7454,4968:103",
  "S:e5fa944b9b9507592d72eeb2f6e5b3814f1ef13c,4968:84",
  "S:8e6c90beba85669bb107c680f9c7d905edd8835d,4968:83",
  "S:9ddcc03c821249d15786be7ca1c4c4dc32f7f9ec,4968:82",
  "S:318b4c75c885095a72addb88ccc271ac07dc4da5,4968:127",
  "S:62a61ef8d3136ce3125b9be2ad62680052f7d169,4968:123",
  "S:8b8de45e7ce0fbed7a34314e0bc8cfbd5296583f,4968:136",
  "S:10a4618c9d11e744706317361267ef7b317d5247,4968:232"];
	
let lmArr = [
  "S:ccff7d3e5a59aa3c3ab4f44a25847fd92273a2ba,379:549",
  "S:fd91278b967f1ec74db895b32044f19ed19e00f0,379:570",
  "S:5a33b61b6acf3c16371ae0773968d8e32bac4183,379:563",
  "S:987075584f411405aa41a954bb088c332665439e,379:589",
  "S:71ffcf9d922674277908a9cf4528d628bfcb2d41,379:580",
  "S:1918853baf4d6523b535f6c30315367fd953e07f,379:606",
  "S:0c3a14e22a31bb1e75d2474e3774ae86751e192c,379:531",
  "S:21dd594c7fc9f544bfdd7a4e36eb962f3b476e8b,379:530",
  "S:14fa72fea274bdd8ee8adaf3cbdb7c594c704d29,379:529",
  "S:cf42e6f7c63032d6e3ec86f66b3fe95f4a659480,379:528",
  "S:5d63f1772c08462235589d562f214a3c05283408,379:527",
  "S:4640d6c9fbdf48c61177151b84a0200d110d67d6,379:526",
  "S:b99d24751e21981426dcd69fb19b5a8b4efcc571,379:525",
  "S:4b4ba9d5c5a410117db964174d839396fa1c0a04,379:524",
  "S:f53acb761fe47293ea08ef42168ba39ca17da85a,379:523",
  "S:4b29232c7e2bc3a06f6d81e48969320ca3a1fd0a,379:546"]

// print(lmArr.length);
// print(dmArr.length);

for (let i=0; i<lmArr.length; i++) {
	tokenKilikae(dmArr[i], lmArr[i])
//切换深色插画
async function tokenKilikae(b,a){
	for(let i =0;i<selection().length;i++) {
		let nodes = await find([selection()[i]], n => true);
		nodes.forEach(n => {
			((n as GeometryMixin).fillStyleId === a)&&((n as GeometryMixin).fillStyleId = b);
			((n as GeometryMixin).strokeStyleId === a)&&((n as GeometryMixin).strokeStyleId = b);
		});
	};
}

//以下为token映射关系表
// const res = await fetch('https://fs3e9r.api.larkfn.com/get_style_keys');
// const data: {name: string, lm: string, dm: string}[] = await res.json();

let dmArr = [
  "S:0c4f551f884deaacc62f2cb7b1b883543edb6a1e,4968:88",
  "S:9b749b62d10fd3521b261b55739b860370102def,4968:110",
  "S:c903c43c6a0560d92dfa430c32816ad1b804c5da,4968:210",
  "S:246db16fc1adaf2dcec439a449d25807c73514ea,4968:118",
  "S:9f091c0a67a493c6e9cdb9d990c213b6d858ed66,4968:87",
  "S:06345641d3c1807a3df0933b90db04d06401e217,4968:161",
  "S:0c936527f0dcac48981b18c9963cc897bcb674a4,4968:86",
  "S:4783334013e5ab706beb6c302ed47757325f5c48,4968:85",
  "S:6e69e8724868b5b06d29219eae334fe6be3b7454,4968:103",
  "S:e5fa944b9b9507592d72eeb2f6e5b3814f1ef13c,4968:84",
  "S:8e6c90beba85669bb107c680f9c7d905edd8835d,4968:83",
  "S:9ddcc03c821249d15786be7ca1c4c4dc32f7f9ec,4968:82",
  "S:318b4c75c885095a72addb88ccc271ac07dc4da5,4968:127",
  "S:62a61ef8d3136ce3125b9be2ad62680052f7d169,4968:123",
  "S:8b8de45e7ce0fbed7a34314e0bc8cfbd5296583f,4968:136",
  "S:10a4618c9d11e744706317361267ef7b317d5247,4968:232"];
	
let lmArr = [
  "S:ccff7d3e5a59aa3c3ab4f44a25847fd92273a2ba,379:549",
  "S:fd91278b967f1ec74db895b32044f19ed19e00f0,379:570",
  "S:5a33b61b6acf3c16371ae0773968d8e32bac4183,379:563",
  "S:987075584f411405aa41a954bb088c332665439e,379:589",
  "S:71ffcf9d922674277908a9cf4528d628bfcb2d41,379:580",
  "S:1918853baf4d6523b535f6c30315367fd953e07f,379:606",
  "S:0c3a14e22a31bb1e75d2474e3774ae86751e192c,379:531",
  "S:21dd594c7fc9f544bfdd7a4e36eb962f3b476e8b,379:530",
  "S:14fa72fea274bdd8ee8adaf3cbdb7c594c704d29,379:529",
  "S:cf42e6f7c63032d6e3ec86f66b3fe95f4a659480,379:528",
  "S:5d63f1772c08462235589d562f214a3c05283408,379:527",
  "S:4640d6c9fbdf48c61177151b84a0200d110d67d6,379:526",
  "S:b99d24751e21981426dcd69fb19b5a8b4efcc571,379:525",
  "S:4b4ba9d5c5a410117db964174d839396fa1c0a04,379:524",
  "S:f53acb761fe47293ea08ef42168ba39ca17da85a,379:523",
  "S:4b29232c7e2bc3a06f6d81e48969320ca3a1fd0a,379:546"]

// print(lmArr.length);
// print(dmArr.length);

for (let i=0; i<lmArr.length; i++) {
	tokenKilikae(dmArr[i], lmArr[i])
}