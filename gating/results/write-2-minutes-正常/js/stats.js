var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1081",
        "ok": "1081",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5234",
        "ok": "5234",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles2": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles3": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "percentiles4": {
        "total": "667",
        "ok": "667",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1076,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.934",
        "ok": "8.934",
        "ko": "-"
    }
},
contents: {
"req_write-request-3f9c8": {
        type: "REQUEST",
        name: "Write Request",
path: "Write Request",
pathFormatted: "req_write-request-3f9c8",
stats: {
    "name": "Write Request",
    "numberOfRequests": {
        "total": "1081",
        "ok": "1081",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5234",
        "ok": "5234",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles2": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles3": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "percentiles4": {
        "total": "667",
        "ok": "667",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1076,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.934",
        "ok": "8.934",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
