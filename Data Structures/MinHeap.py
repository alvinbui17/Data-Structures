class Solution:
    def findKthLargest(self, nums, k):
        heapq.heapify(nums)
        while len(nums) > k:
            heapq.heappop(nums)
        return nums[0]
        