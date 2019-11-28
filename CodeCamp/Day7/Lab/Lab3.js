input: array ของเลข
target: เลข

start: = 0
end: = input.length - 1

while (start < end) {
    mid: = (start + end) / 2
    if (input[mid] = target) Found!
        if (input[mid] < target) start = mid + 1
    else end = mid - 1
}
if (input[mid] = target) Found!
    else Not found….