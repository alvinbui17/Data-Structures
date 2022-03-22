    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        heap = []
        for list in lists:
            while list:
                heap.append(list.val)
                list = list.next
                
        heapq.heapify(heap)
        
        dummyHead = ListNode()
        current = dummyHead
        
        while len(heap):
            current.next = ListNode(heapq.heappop(heap))
            current = current.next
            
        return dummyHead.next
          